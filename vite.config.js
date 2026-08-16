import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],

  base: command === "build" ? "./" : "/",

  build: {
    outDir: "dist-react",
  },

  server: {
    port: 5123,
    strictPort: true,
  },
}));