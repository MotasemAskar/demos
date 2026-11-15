// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Prospect demo, served from GitHub Pages under /demos/al-majeed-plastic/.
// Paths are written root-relative in the source; scripts/rebase.mjs prefixes
// them after the build so the same source can later ship on its own domain.
export default defineConfig({
  site: 'https://motasemaskar.github.io',
  output: 'static',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
    preview: { allowedHosts: true },
  },
});
