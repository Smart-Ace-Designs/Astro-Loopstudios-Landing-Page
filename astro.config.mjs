// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Alata",
        cssVariable: "--font-alata",
        weights: [400],
        styles: ["normal"],
      },
      {
        provider: fontProviders.google(),
        name: "Josefin Sans",
        cssVariable: "--font-josefinsans",
        weights: [400, 700],
        styles: ["normal"],
      },
    ],
  },
});
