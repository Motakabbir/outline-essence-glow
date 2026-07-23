import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    ssr: false,
  },
  nitro: {
    preset: "static",
    output: {
      publicDir: "dist/client",
    },
  },
  vite: {
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
