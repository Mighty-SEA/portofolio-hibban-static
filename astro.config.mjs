// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://habiburrahman.web.id',
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});