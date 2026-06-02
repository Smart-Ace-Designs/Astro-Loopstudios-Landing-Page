// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://smart-ace-designs.github.io",
  base: "/astro-loopstudios-landing-page",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        "astro/virtual-modules/transitions-router.js",
        "astro/virtual-modules/transitions-types.js",
        "astro/virtual-modules/transitions-events.js",
        "astro/virtual-modules/transitions-swap-functions.js",
      ],
    },
  },
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
});
