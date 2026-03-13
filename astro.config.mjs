import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import icon from "astro-icon";
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: "https://alonsog88.github.io",
  base: "/your-repo-name",
  integrations: [tailwind(), icon(), compress()],
  output: "static",  // 👈 changed from "server"
});
