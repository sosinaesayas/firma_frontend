import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '@'),
    },
  },
  build: { chunkSizeWarningLimit: 1600, },
  plugins: [react()],
});
