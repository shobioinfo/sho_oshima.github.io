import { defineConfig } from 'astro/config';

// GitHub Pages project site:
// https://shobioinfo.github.io/sho_oshima.github.io/
export default defineConfig({
  site: 'https://shobioinfo.github.io',
  base: '/sho_oshima.github.io',
  output: 'static',
  build: {
    inlineStylesheets: 'always',
  },
  devToolbar: { enabled: false },
});
