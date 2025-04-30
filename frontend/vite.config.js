import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for assets
  // base: '/static/',
  build: {
    // Output directory for build
    outDir: 'dist',
    // Place assets alongside index.html instead of in separate directories
    assetsDir: '',
    // Generate manifest.json for Django to read
    manifest: true,
    rollupOptions: {
      output: {
        // Avoid hashing filenames during development
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  },
  server: {
    // Proxy API requests to Django during development
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      }
    }
  }
})