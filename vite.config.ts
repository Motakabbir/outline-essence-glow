import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import fs from "fs";
import path from "path";

function cssRedirectPlugin() {
  return {
    name: "css-redirect",
    resolveId(source, importer, options) {
      if (options?.ssr && source.includes("styles.css?url")) {
        return "\0styles.css?url";
      }
      return null;
    },
    load(id) {
      if (id === "\0styles.css?url") {
        const assetsDir = path.resolve("dist/client/assets");
        let cssFile = "/assets/styles.css"; // fallback
        if (fs.existsSync(assetsDir)) {
          const files = fs.readdirSync(assetsDir);
          const found = files.find(
            (f) => f.startsWith("styles-") && f.endsWith(".css")
          );
          if (found) {
            cssFile = `/assets/${found}`;
          }
        }
        return `export default ${JSON.stringify(cssFile)};`;
      }
      return null;
    },
  };
}

export default defineConfig({
  tanstackStart: {
    server: {
      entry: "src/server.ts",
    },
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },
  nitro: {
    preset: "node",
  },
  vite: {
    plugins: [cssRedirectPlugin()],
    environments: {
      nitro: {
        build: {
          rollupOptions: {
            input: "src/server.ts",
          },
        },
      },
    },
  },
});
