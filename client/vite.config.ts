import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 1234,
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
