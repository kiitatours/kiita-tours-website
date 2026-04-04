// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages deployment (repo page at kiitatours.github.io/kiita-tours-website)
  // If you configure a custom domain, remove `base` and update `site` to your domain.
  site: 'https://kiitatours.github.io',
  base: '/kiita-tours-website',
});
