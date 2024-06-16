import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    // Add other plugins as needed
  ],
  build: {
    outDir: "dist", // Specify the output directory for production builds
    sourcemap: true, // Generate source maps for debugging
  },
  resolve: {
    alias: {
      // Example alias for src directory
      "@": path.resolve(__dirname, "src"),
    },
  },
  esbuild: {
    loader: "jsx",
    include: ["src/**/*.js", "src/**/*.jsx"],
    exclude: [],
  },
});
