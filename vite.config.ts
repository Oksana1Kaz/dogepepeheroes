import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      filter: /\.(js|mjs|json|css|html)$/i,
      threshold: 1024
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      filter: /\.(js|mjs|json|css|html)$/i,
      threshold: 1024
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'framer-motion', 'lucide-react']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    assetsDir: 'assets',
    sourcemap: true
  }
});