import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id) return;
          if (id.includes('node_modules')) {
            const pkg = id.split('node_modules/')[1].split('/')[0].toString();
            if (!pkg) return;
            if (pkg === 'lucide-react') return 'icons'; // force lucide-react into "icons"
            // group other node_modules packages (optional)
            if (pkg === 'react' || pkg.startsWith('react')) return 'react-vendor';
            return 'vendor';
          }
          // keep app code default (or you can apply special logic)
        }
      }
    },
    // Removed 'terser' specific settings for debugging
    cssMinify: true,
    reportCompressedSize: false,
    sourcemap: false, // Disable sourcemaps in production for smaller bundles
    chunkSizeWarningLimit: 1000,
  },
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..']
    }
  },
  // Performance optimizations
  esbuild: {
    drop: ['console', 'debugger'], // Remove console logs in production
  },
});
