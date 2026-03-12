import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/** Extract the bare package name from a node_modules file path. */
function packageNameFromId(id: string): string | undefined {
  const parts = id.split('node_modules/');
  if (parts.length < 2) return undefined;
  const segment = parts[parts.length - 1];
  // Scoped packages: @scope/name
  if (segment.startsWith('@')) {
    const [scope, name] = segment.split('/');
    return name ? `${scope}/${name}` : undefined;
  }
  return segment.split('/')[0];
}

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
            const pkg = packageNameFromId(id);
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
