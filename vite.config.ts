import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
      base: resolve(__dirname, "src/base"),
      app: resolve(__dirname, "src/app"),
      assets: resolve(__dirname, "src/assets"),
      store: resolve(__dirname, "src/app/store"),
    },
  },
  plugins: [react()],
  server: {
    port: 3000,
  },
});
