import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
    build: {
      outDir: 'dist',
    },
  esbuild: {
    loader: "jsx",
    include: [
      // Add this
      "src/**/*.js",
      "src/**/*.jsx",
    ],
    exclude: [],
  },
});
