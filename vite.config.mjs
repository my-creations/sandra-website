import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** Copy dist/index.html → dist/404.html so GitHub Pages serves the SPA for unknown paths. */
function spaGithubPagesFallback() {
  return {
    name: "spa-github-pages-fallback",
    closeBundle() {
      const indexHtml = resolve("dist/index.html");
      const notFoundHtml = resolve("dist/404.html");
      if (existsSync(indexHtml)) {
        copyFileSync(indexHtml, notFoundHtml);
      }
    },
  };
}

export default defineConfig({
  base: "/sandra-website/",
  plugins: [react(), spaGithubPagesFallback()],
});
