// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://stevenacz.com',
  base: '/peso-tracker/',
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    format: 'directory'
  }
});