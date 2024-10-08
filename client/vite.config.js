import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  return {
    base: command === 'build' && process.env.GH_PAGES === 'true' ? "/portfolio/" : "/",
    plugins: [react()],
    build: {
      outDir: "dist",
    },
  };
});
