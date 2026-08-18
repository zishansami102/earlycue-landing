// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://earlycue.com',
  trailingSlash: 'always',
  output: 'static',
  adapter: vercel(),
  integrations: [sitemap(), tailwind({ applyBaseStyles: false }), react()],
});
