import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    ssr: false,
  },
  nitro: {
    preset: "static",
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
