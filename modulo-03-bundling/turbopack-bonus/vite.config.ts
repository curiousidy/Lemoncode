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
//   build: {
//     outDir: 'dist',
//     rollupOptions: {
//       output: {
//         assetFileNames: '[name]-[hash][ext]',
//       },
//     },
//   },
});
