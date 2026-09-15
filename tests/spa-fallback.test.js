import { mkdtempSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { spaGithubPagesFallback } from "../vite.config.mjs";

function makeOutDir(withIndex) {
  const dir = mkdtempSync(join(tmpdir(), "spa-fallback-"));
  if (withIndex) {
    writeFileSync(join(dir, "index.html"), "<html>spa</html>");
  }
  return dir;
}

describe("spaGithubPagesFallback", () => {
  it("copies index.html to 404.html", () => {
    const dir = makeOutDir(true);
    spaGithubPagesFallback(dir).closeBundle();
    expect(readFileSync(join(dir, "404.html"), "utf8")).toBe("<html>spa</html>");
  });

  it("does nothing when index.html is missing", () => {
    const dir = makeOutDir(false);
    const plugin = spaGithubPagesFallback(dir);
    expect(() => plugin.closeBundle()).not.toThrow();
  });

  it("exposes the expected plugin name", () => {
    expect(spaGithubPagesFallback().name).toBe("spa-github-pages-fallback");
  });

  it("supports nested out dirs", () => {
    const dir = mkdtempSync(join(tmpdir(), "spa-nested-"));
    const nested = join(dir, "sub", "dist");
    mkdirSync(nested, { recursive: true });
    writeFileSync(join(nested, "index.html"), "<html>nested</html>");
    spaGithubPagesFallback(nested).closeBundle();
    expect(readFileSync(join(nested, "404.html"), "utf8")).toBe("<html>nested</html>");
  });
});
