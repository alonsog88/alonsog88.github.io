import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import icon from "astro-icon";
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: "https://alonsog88.github.io",
  // no base needed for user sites
  integrations: [tailwind(), icon(), compress()],
  output: "static",
});
