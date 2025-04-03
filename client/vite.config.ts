import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // Allow access from outside
    port: 1234, // or your desired port
    proxy: {
      "/api": {
        target: "http://localhost:3001", // Your REST backend
        changeOrigin: true,
      },
      "/graphql": {
        target: "http://localhost:4000", // GraphQL backend
        changeOrigin: true,
      },
    },
    watch: {
      usePolling: true, // Required for Docker
      interval: 1000, // Check for changes every second
    },
  },
  preview: {
    port: 1234,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  base: "/",
  plugins: [react()],
});
