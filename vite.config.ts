import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {},
  nitro: {},
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
