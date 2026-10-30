import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { SITE_URL } from "./src/consts.ts";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  trailingSlash: "always",
  integrations: [
    react(),
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
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: "es",
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
