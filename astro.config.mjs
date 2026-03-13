import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import icon from "astro-icon";
import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://alonsog88.github.io", // 👈 add this
  integrations: [tailwind(), icon(), compress()],
  output: "server",
  adapter: vercel()
});
