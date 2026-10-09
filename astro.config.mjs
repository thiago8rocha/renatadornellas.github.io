import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://renatadornellas.github.io',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
