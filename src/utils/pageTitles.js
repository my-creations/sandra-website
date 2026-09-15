export const BRAND = "Sandra Camilo";

/** Pathname → i18n key for the page segment of document.title */
export const TITLE_KEYS = {
  "/": null,
  "/about": "about",
  "/portfolio": "portfolio",
  "/portfolio/collaborations": "collaborations",
  "/shop": "shop",
  "/shop/products": "products",
  "/contact": "contact",
};

/**
 * Pure helper: page title for a pathname given a translate function.
 * Falls back to the bare brand for the home page and unknown paths.
 */
export function titleForPath(pathname, t) {
  const key = TITLE_KEYS[pathname];
  return key ? `${t(key)} · ${BRAND}` : BRAND;
}
