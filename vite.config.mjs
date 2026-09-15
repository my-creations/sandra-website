import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** Copy <outDir>/index.html → <outDir>/404.html so GitHub Pages serves the SPA for unknown paths. */
export function spaGithubPagesFallback(outDir = "dist") {
  return {
    name: "spa-github-pages-fallback",
    closeBundle() {
      const indexHtml = resolve(outDir, "index.html");
      const notFoundHtml = resolve(outDir, "404.html");
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
