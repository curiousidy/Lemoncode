import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
   checker({ typescript: true }),
   react()
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  build: {
    // outDir: 'turboBundle',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash].[ext]',
        chunkFileNames:'chunks/[name]-[hash].js',
        entryFileNames:'js/[name]-[hash].js'
      },
    },
  },
});
