import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },
  nitro: {
    preset: "vercel",
    ...({
      vercel: {
        functions: {
          runtime: "nodejs22.x",
        },
      },
    } as Record<string, unknown>),
    output: {
      dir: ".vercel/output",
      serverDir: ".vercel/output/functions/__server.func",
      publicDir: "dist",
    },
  },
});
