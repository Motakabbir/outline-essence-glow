import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    ssr: false, // Explicitly disable SSR to build a standard client-side SPA
  },
  nitro: false, // Explicitly disable Nitro plugin so it doesn't crash during build
});
