import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {resolve} from 'path';
import {visualizer} from 'rollup-plugin-visualizer';
import Critters from 'critters';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        visualizer({
            open: true, // Open the visualization after build
            filename: 'dist/stats.html', // Output file
            gzipSize: true, // Show gzipped sizes
            brotliSize: true, // Show brotli sizes
            template: 'treemap', // Use treemap visualization
        }),
        {
            name: 'vite-plugin-critters',
            apply: 'build',
            async writeBundle(outputOptions, bundle) {
                const critters = new Critters({
                    // Inline all styles from external stylesheets
                    preload: 'swap',
                    // Don't inline critical font-face rules, but preload the font urls
                    preloadFonts: true,
                    // Inline critical CSS
                    inlineFonts: false,
                    // Don't remove the original CSS
                    pruneSource: false,
                    // Reduce the size of critical CSS
                    compress: true,
                    // Key for the cache
                    key: 'critters-cache',
                    // Add font-display: swap to all @font-face rules
                    fonts: true,
                });

                // Process HTML files
                for (const fileName in bundle) {
                    if (fileName.endsWith('.html')) {
                        const file = bundle[fileName];
                        if (file.type === 'asset' && typeof file.source === 'string') {
                            file.source = await critters.process(file.source);
                        }
                    }
                }
            }
        },
    ],
  root: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
