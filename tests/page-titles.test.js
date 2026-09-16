import { describe, expect, it } from "vitest";
import { BRAND, TITLE_KEYS, titleForPath } from "../src/utils/pageTitles.js";

/** Must stay in sync with HashRouter routes (AnimRoutes) and public/sitemap.xml. */
const EXPECTED_ROUTES = [
  "/",
  "/about",
  "/portfolio",
  "/portfolio/collaborations",
  "/shop",
  "/shop/products",
  "/contact",
];

const t = (key) => `T:${key}`;

describe("TITLE_KEYS route coverage", () => {
  it("covers every app route", () => {
    expect(Object.keys(TITLE_KEYS).sort()).toEqual([...EXPECTED_ROUTES].sort());
  });
});

describe("titleForPath", () => {
  it("returns the bare brand for the home page", () => {
    expect(titleForPath("/", t)).toBe(BRAND);
  });

  it("returns the bare brand for unknown paths", () => {
    expect(titleForPath("/nope", t)).toBe(BRAND);
    expect(titleForPath("/shop/nope", t)).toBe(BRAND);
  });

  it("prefixes the translated segment with the brand on titled routes", () => {
    expect(titleForPath("/about", t)).toBe(`T:about · ${BRAND}`);
    expect(titleForPath("/shop/products", t)).toBe(`T:products · ${BRAND}`);
  });
});
