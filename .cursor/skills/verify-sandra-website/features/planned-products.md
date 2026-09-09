# Planned products catalog

The Guides experience previews digital travel guides that are **planned products** only: they show a Coming soon / Em breve status and must not present checkout.

## Sub-features

- `shop-intro` opens `/#/shop` with the catalog introduction.
- `shop-to-products` follows `[data-test="visitProductsButton"]` to `/#/shop/products`.
- `guides-visible` shows Sintra and Lisbon guide cards.
- `planned-badge` shows Coming soon on each visible guide.
- `hidden-inventory` keeps bundles/presets sections hidden (`hidden` attribute).

## How to get to it (user POV)

- Choose **Guides** / nav shop (`nav-link-shop`) → **Browse guides**.
- From Home, choose **Explore travel guides** (goes straight to products).
- Open `/#/shop/products` directly.

## Driving it with Playwright (`drive.mjs`)

Preconditions:

- Launch + Doctor green.
- Force English so planned label is **Coming soon**.

- **Open shop.** Click `[data-test="nav-link-shop"]`. Heading **Guides**; `[data-test="visitProductsButton"]` visible.
- **Open products.** Click `visitProductsButton`. URL `#/shop/products`; `[data-test="productPageSection"]` and `guidesSection` visible.
- **Assert planned guides.** `guideProductTitle1` = Sintra Guide; `guideProductStatus1` and `guideProductStatus2` = Coming soon. `bundlesSection` not visible.
- **Proof.** `node .cursor/skills/verify-sandra-website/scripts/drive.mjs planned-products` → `evidence/planned-products/02-products-planned.png`.

## Gotchas

- Public nav label is **Guides** (EN) / localized shop key — not the word “Shop” in the header (products page H1 is **Shop**).
- Never treat a planned badge as purchasable. No checkout button should appear.
- `data-test` (not `data-testid`) is the attribute Playwright must target.
