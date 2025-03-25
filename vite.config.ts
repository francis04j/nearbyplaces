import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

const routes = [
  '/',
  '/pricing',
  '/integration',
  '/demo',
  '/product/amenities/daycare',
  '/contact-sales',
  '/terms'
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://www.amenities-closeby.co.uk',
      urls: routes.map(route => ({
        url: route,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8,
      }))
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        error: './public/error.html'
      }
    }
  }
});