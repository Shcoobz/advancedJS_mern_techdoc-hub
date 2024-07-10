import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
console.log('__dirname:', __dirname);

export default defineConfig({
  root: __dirname, // Set the root to the frontend directory
  plugins: [react()],
  resolve: {
    alias: {
      // Assuming your source code is within `frontend/src`
      '@': path.resolve(__dirname, 'frontend/src'),
    },
  },
  server: {
    proxy: {
      // setup proxy here if your backend and frontend are served on different ports
      '/api': {
        target: 'http://localhost:3500',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: path.join(__dirname, 'dist'), // Output directory for production build
    emptyOutDir: true, // Optionally clear the output directory on build
  },
});
