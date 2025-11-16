import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";

// https://astro.build/config
export default defineConfig({
  site: "https://stfu-and-eat.vercel.app/",
  integrations: [sitemap(), mdx(), pagefind()],
  vite: {
    resolve: {
      alias: {
        // allow imports like '@components/...' or '@/components/...'
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
