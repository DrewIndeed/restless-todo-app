import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 1234,
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
