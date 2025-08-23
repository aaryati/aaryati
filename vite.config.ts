import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [react(), runtimeErrorOverlay()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    sourcemap: false, // Disable sourcemaps in production to reduce memory usage
    minify: "esbuild",
    cssMinify: "esbuild",
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // More granular chunk splitting
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'react-vendor';
            }
            if (id.includes('@tanstack') || id.includes('react-query')) {
              return 'query-vendor';
            }
            return 'vendor'; // Other node_modules
          }
        },
      },
    },
    target: 'esnext', // Modern browsers only for smaller bundle
    assetsInlineLimit: 4096, // Inline smaller assets
  },
  publicDir: path.resolve(import.meta.dirname, "public"),
});
