import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import { SITE_URL } from "./src/consts.ts";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  trailingSlash: "always",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es",
          en: "en",
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: "es",
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
