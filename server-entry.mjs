import http from 'http';
import { existsSync, lstatSync, createReadStream, readFileSync } from 'fs';
import { resolve, join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load environment variables from .env files
const mode = process.env.NODE_ENV || 'production';
const envFiles = [`.env.${mode}`, '.env'];
for (const file of envFiles) {
  const envPath = resolve(__dirname, file);
  if (existsSync(envPath)) {
    try {
      const envContent = readFileSync(envPath, 'utf-8');
      for (const line of envContent.split(/\r?\n/)) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        const firstEquals = trimmed.indexOf('=');
        if (firstEquals === -1) continue;
        const key = trimmed.substring(0, firstEquals).trim();
        let val = trimmed.substring(firstEquals + 1).trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.substring(1, val.length - 1);
        }
        if (key && process.env[key] === undefined) {
          process.env[key] = val;
        }
      }
      console.log(`Loaded environment variables from ${file}`);
    } catch (err) {
      console.error(`Failed to read ${file}:`, err);
    }
  }
}

const PORT = parseInt(process.env.PORT || '3030', 10);
const HOST = process.env.HOST || '127.0.0.1';

// Try to find the correct built server file
const possiblePaths = [
  './dist/server/index.mjs',   // Nitro node-server preset output
  './dist/server/server.js',   // TanStack Start SSR handler
  './dist/server/server.mjs',  // Alternative
];

const serverPath = possiblePaths.find(p => existsSync(resolve(__dirname, p)));

if (!serverPath) {
  console.error('CRITICAL: Server entry not found in dist/server.');
  console.error('Please run "npm run build" first to generate the build artifacts.');
  process.exit(1);
}

const absoluteServerPath = resolve(__dirname, serverPath);
console.log(`Loading built server handler from: ${absoluteServerPath}`);

// Load the SSR handler module
const mod = await import(absoluteServerPath).catch(err => {
  console.error('CRITICAL: Failed to import built server index:', err);
  process.exit(1);
});

const handler = mod.default ?? mod;

// 1. Create a helper to stream responses
function streamToNode(stream, nodeRes) {
  const reader = stream.getReader();
  function push() {
    reader.read().then(({ done, value }) => {
      if (done) {
        nodeRes.end();
        return;
      }
      nodeRes.write(value);
      push();
    }).catch(err => {
      console.error('Stream read error:', err);
      nodeRes.end();
    });
  }
  push();
}

// 2. Start the HTTP Proxy server
const server = http.createServer(async (req, res) => {
  try {
    // If the server module has a clean Web-standard fetch handler (TanStack Start standard)
    if (typeof handler?.fetch === 'function') {
      const url = `http://${req.headers.host || 'localhost'}${req.url}`;
      
      const headers = new Headers();
      for (const [key, value] of Object.entries(req.headers)) {
        if (value !== undefined) {
          if (Array.isArray(value)) {
            value.forEach(v => headers.append(key, v));
          } else {
            headers.set(key, value);
          }
        }
      }

      let body = null;
      if (req.method !== 'GET' && req.method !== 'HEAD') {
        const buffers = [];
        for await (const chunk of req) {
          buffers.push(chunk);
        }
        body = Buffer.concat(buffers);
      }

      const fetchReq = new Request(url, {
        method: req.method,
        headers,
        body,
        duplex: body ? 'half' : undefined,
      });

      const fetchRes = await handler.fetch(fetchReq);

      // Copy headers back to Node response
      res.statusCode = fetchRes.status;
      fetchRes.headers.forEach((value, key) => {
        // Prevent duplicate headers or invalid node transfer encodings
        if (key.toLowerCase() !== 'transfer-encoding') {
          res.setHeader(key, value);
        }
      });

      if (fetchRes.body) {
        streamToNode(fetchRes.body, res);
      } else {
        res.end();
      }
    } else {
      // The module is a self-hosting server (e.g. Nitro node-server preset)
      // Since it handles its own HTTP bindings, it shouldn't be executed in this proxy shell.
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error: Loaded module is self-hosting. Set Nitro preset to "node" or run it directly.');
    }
  } catch (err) {
    console.error('Request proxy error:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error (Proxy)');
  }
});

// If the handler is self-hosting, we delegate the port binding to it entirely
if (typeof handler?.fetch === 'function') {
  server.listen(PORT, HOST, () => {
    console.log(`=========================================`);
    console.log(`🚀 Node.js proxy server running on http://${HOST}:${PORT}`);
    console.log(`=========================================`);
  });
} else {
  // Let the self-hosting module start itself
  console.log('Server module is self-hosting (Nitro node-server preset).');
  console.log(`✓ Server should be listening on port ${PORT}`);
}
