import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import astroExpressiveCode from "astro-expressive-code";

export default defineConfig({
  site: "https://cnai.epfl.ch",
  base: "/soma",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon(), astroExpressiveCode()],
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Noto Sans",
      cssVariable: "--font-noto-sans",
      weights: ["100 900"],
    },
  ],
});
