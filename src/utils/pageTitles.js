export const BRAND = "Sandra Camilo";

export const SITE_URL = "https://my-creations.github.io/sandra-website/";

export const DEFAULT_DESCRIPTION =
  "Sandra Camilo — travel & lifestyle storytelling, photography, and digital travel guides.";

/** Pathname → i18n key for the page segment of document.title */
export const TITLE_KEYS = {
  "/": null,
  "/about": "about",
  "/portfolio": "portfolio",
  "/portfolio/collaborations": "collaborations",
  "/shop": "shop",
  "/shop/products": "products",
  "/contact": "contact",
  "/privacy": "privacy",
  "/terms": "terms",
};

/** Pathname → i18n key for the per-route meta description */
export const DESCRIPTION_KEYS = {
  "/": "meta_description_home",
  "/about": "meta_description_about",
  "/portfolio": "meta_description_portfolio",
  "/portfolio/collaborations": "meta_description_collaborations",
  "/shop": "meta_description_shop",
  "/shop/products": "meta_description_products",
  "/contact": "meta_description_contact",
  "/privacy": "meta_description_privacy",
  "/terms": "meta_description_terms",
};

/**
 * Pure helper: page title for a pathname given a translate function.
 * Falls back to the bare brand for the home page and unknown paths.
 */
export function titleForPath(pathname, t) {
  const key = TITLE_KEYS[pathname];
  return key ? `${t(key)} · ${BRAND}` : BRAND;
}

/**
 * Pure helper: meta description for a pathname given a translate function.
 * Falls back to the default site description for unknown paths or when
 * the key is missing from the locale.
 */
export function descriptionForPath(pathname, t) {
  const key = DESCRIPTION_KEYS[pathname];
  if (!key) return DEFAULT_DESCRIPTION;
  try {
    const value = t(key);
    return value && value !== key ? value : DEFAULT_DESCRIPTION;
  } catch {
    return DEFAULT_DESCRIPTION;
  }
}

/**
 * Applies title + description (+ OG/Twitter descriptions) for a pathname.
 * Keeps index.html as the fallback when a description key is missing.
 */
export function applyPageMeta(pathname, t) {
  document.title = titleForPath(pathname, t);
  const description = descriptionForPath(pathname, t);
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", description);
  for (const selector of ['meta[property="og:description"]', 'meta[name="twitter:description"]']) {
    const el = document.querySelector(selector);
    if (el) el.setAttribute("content", description);
  }
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", document.title);
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) twitterTitle.setAttribute("content", document.title);
}
