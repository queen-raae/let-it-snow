import { resolve } from "path";
import { defineConfig } from "vite";

const LIBRARY_NAME = "snowfall";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.js"),
      name: LIBRARY_NAME,
      formats: ["iife"],
      fileName: () => `${LIBRARY_NAME}.js`,
    },
    rollupOptions: {
      output: {
        extend: true,
      },
    },
  },
});
