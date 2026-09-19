import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { BRAND, TITLE_KEYS, titleForPath } from "../src/utils/pageTitles.js";

const root = new URL("..", import.meta.url).pathname;

const EXPECTED_ROUTES = [
  "/",
  "/about",
  "/portfolio",
  "/portfolio/collaborations",
  "/shop",
  "/shop/products",
  "/contact",
  "/privacy",
  "/terms",
];

function locs(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

describe("sitemap.xml", () => {
  it("exists and lists every app route", () => {
    const path = join(root, "public", "sitemap.xml");
    expect(existsSync(path)).toBe(true);
    const urls = locs(readFileSync(path, "utf8"));
    for (const route of EXPECTED_ROUTES) {
      const suffix = route === "/" ? "/" : `/#${route}`;
      expect(
        urls.some((u) => u.endsWith(suffix)),
        `sitemap should contain route ${route}`,
      ).toBe(true);
    }
  });
});

describe("robots.txt", () => {
  it("allows crawling and points at the sitemap", () => {
    const content = readFileSync(join(root, "public", "robots.txt"), "utf8");
    expect(content).toMatch(/User-agent: \*/);
    expect(content).toMatch(
      /Sitemap: https:\/\/my-creations\.github\.io\/sandra-website\/sitemap\.xml/,
    );
  });
});

describe("social/meta tags in index.html", () => {
  const html = readFileSync(join(root, "index.html"), "utf8");

  it("has Open Graph tags with absolute URLs", () => {
    for (const tag of [
      'property="og:type" content="website"',
      'property="og:url" content="https://my-creations.github.io/sandra-website/"',
      'property="og:title"',
      'property="og:description"',
      'property="og:image" content="https://my-creations.github.io/sandra-website/logo512.png"',
    ]) {
      expect(html, `index.html should contain ${tag}`).toContain(tag);
    }
  });

  it("has Twitter card tags", () => {
    for (const tag of [
      'name="twitter:card"',
      'name="twitter:title"',
      'name="twitter:description"',
      'name="twitter:image"',
    ]) {
      expect(html, `index.html should contain ${tag}`).toContain(tag);
    }
  });

  it("references an og:image that exists in public/", () => {
    const match = html.match(/property="og:image" content="([^"]+)"/);
    expect(match).not.toBeNull();
    const file = new URL(match[1]).pathname.replace("/sandra-website/", "");
    expect(existsSync(join(root, "public", file))).toBe(true);
  });
});

describe("per-route document titles", () => {
  const t = (key) => ({ about: "About" })[key] ?? key;

  it("falls back to the bare brand on home and unknown paths", () => {
    expect(titleForPath("/", t)).toBe(BRAND);
    expect(titleForPath("/nope", t)).toBe(BRAND);
  });

  it("prefixes the translated page name for known routes", () => {
    expect(titleForPath("/about", t)).toBe(`About · ${BRAND}`);
    expect(titleForPath("/shop/products", t)).toBe(`products · ${BRAND}`);
  });

  it("covers every route in the sitemap", () => {
    for (const route of EXPECTED_ROUTES) {
      expect(TITLE_KEYS, `TITLE_KEYS should cover ${route}`).toHaveProperty(route);
    }
  });
});
