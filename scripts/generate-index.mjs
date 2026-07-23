/**
 * Post-build script: generates index.html for static hosting.
 *
 * TanStack Start + Nitro v3 prerendering has a lifecycle bug where the
 * prerender crawler returns 404 for "/" because the SSR service isn't
 * properly wired during the static build. This script works around it
 * by scanning the built client assets and generating an SPA shell that
 * hydrates on the client side.
 */
import { readdirSync, writeFileSync, existsSync, cpSync } from "fs";
import { resolve, join } from "path";

const CLIENT_DIR = resolve("dist/client");
const ASSETS_DIR = join(CLIENT_DIR, "assets");

if (!existsSync(ASSETS_DIR)) {
  console.error("dist/client/assets not found. Run `npm run build` first.");
  process.exit(1);
}

const files = readdirSync(ASSETS_DIR);
const cssFile = files.find((f) => f.endsWith(".css"));
const mainJs = files.find(
  (f) => f.startsWith("index-") && f.endsWith(".js")
);

if (!cssFile || !mainJs) {
  console.error("Could not find main CSS or JS bundle in dist/client/assets/");
  process.exit(1);
}

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vision148 — RS500 Genesis Build</title>
    <meta name="description" content="A one-of-one syndicated build of the Ford Sierra RS500 Cosworth. Heritage coachbuilding meets digital manufacturing." />
    <meta name="author" content="Vision148" />
    <meta property="og:title" content="Vision148 — RS500 Genesis Build" />
    <meta property="og:description" content="A one-of-one syndicated build of the Ford Sierra RS500 Cosworth." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="stylesheet" href="/assets/${cssFile}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/${mainJs}"></script>
  </body>
</html>
`;

writeFileSync(join(CLIENT_DIR, "index.html"), html);
console.log(`✓ Generated dist/client/index.html`);
console.log(`  CSS: /assets/${cssFile}`);
console.log(`  JS:  /assets/${mainJs}`);

// Copy index.html as 200.html for SPA fallback (used by `serve -s`)
cpSync(join(CLIENT_DIR, "index.html"), join(CLIENT_DIR, "200.html"));
console.log(`✓ Copied as dist/client/200.html (SPA fallback)`);
