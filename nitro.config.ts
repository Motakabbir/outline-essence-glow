import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  preset: "static",
  noPublicDir: true,
  prerender: {
    routes: ["/"],
    crawlLinks: true,
  },
});
