# Sandra Camilo — Creator Brand Website

The digital home of Sandra Camilo's creator brand: an editorial, bilingual experience for travel stories, visual work, brand collaborations, and upcoming digital products.

**[Visit the live website →](https://my-creations.github.io/sandra-website/)**

## About the project

This website brings Sandra's content and commercial work together under one visual identity. It is designed around photography, warm editorial typography, and a mobile-first experience inspired by travel journals and printed keepsakes.

The current experience includes:

- an editorial landing page and creator introduction;
- a curated portfolio of visual work;
- dedicated brand-collaboration stories;
- a preview catalog for travel guides and future digital products;
- a bilingual contact experience powered by EmailJS;
- English and Portuguese content with remembered language preference.

> [!IMPORTANT]
> Digital products are currently previews. Checkout, payment processing, and digital delivery are not part of this application yet. Commerce will be delegated to a replaceable external provider, as described in [ADR 0001](docs/adr/0001-delegate-commerce-to-a-replaceable-provider.md).

## Experience and design

The interface uses a blush, cream, sage, cocoa, and cherry palette with an editorial serif/sans-serif type system. Photography leads the experience through polaroid frames, asymmetrical compositions, soft surfaces, and restrained motion.

Key product qualities:

- responsive layouts for mobile, tablet, and desktop;
- hash-based navigation that works reliably on static hosting;
- animated route transitions with Framer Motion;
- reusable visual primitives defined with Tailwind CSS;
- localized navigation, page content, forms, and product copy;
- accessible semantic structure and reduced dependence on JavaScript services.

## Routes

Because the site uses `HashRouter`, application routes appear after `/#/` in production.

| Route | Purpose |
| --- | --- |
| `/#/` | Editorial homepage |
| `/#/about` | Sandra's story and creator profile |
| `/#/portfolio` | Curated visual portfolio |
| `/#/portfolio/collaborations` | Selected brand collaborations |
| `/#/shop` | Introduction to the digital-product catalog |
| `/#/shop/products` | Travel-guide and product previews |
| `/#/contact` | Inquiry form |

## Technology

| Area | Tools |
| --- | --- |
| UI | React 18, Tailwind CSS 3 |
| Build | Vite 8 |
| Navigation | React Router 7 |
| Motion | Framer Motion |
| Localization | i18next, react-i18next |
| Forms | EmailJS, React Toastify |
| Testing | Vitest |
| Hosting | GitHub Pages, GitHub Actions |

## Getting started

### Prerequisites

- Node.js 22 or newer
- bun

### Install and run

Clone the repository, install the locked dependency tree, and start Vite:

```bash
git clone https://github.com/my-creations/sandra-website.git
cd sandra-website
bun install --frozen-lockfile
bun run dev
```

Vite prints the local URL when it starts, usually `http://localhost:5173`.

To expose the development server to another device on the same local or Tailscale network, use:

```bash
bun run start
```

### Quality checks

Run the same essential checks used by continuous deployment:

```bash
bun run test
bun run build
```

Preview the generated production bundle locally:

```bash
bun run preview
```

## Scripts

| Command | Purpose |
| --- | --- |
| `bun run dev` | Start Vite on localhost with hot reload |
| `bun run start` | Start Vite on all network interfaces |
| `bun run test` | Run the Vitest suite once |
| `bun run build` | Generate the production bundle in `dist/` |
| `bun run preview` | Serve the generated bundle locally |
| `bun run deploy` | Legacy manual publication to a `gh-pages` branch |

The GitHub Actions workflow is the canonical deployment path. The manual `deploy` script is retained only as a fallback and should not be needed during normal development.

## Project structure

```text
.
├── .github/workflows/   # Continuous deployment to GitHub Pages
├── docs/adr/            # Architecture decision records
├── public/              # Static browser assets and site metadata
├── src/
│   ├── components/      # Navigation and shared interface components
│   ├── context/         # React context providers
│   ├── fonts/           # Local display font assets
│   ├── img/             # Editorial and collaboration photography
│   ├── pages/           # Route-level page components
│   ├── i18n.js          # English and Portuguese copy
│   └── index.css        # Tailwind layers and visual design system
├── CONTEXT.md           # Canonical creator-brand domain language
├── vite.config.mjs      # Vite and GitHub Pages base-path configuration
└── package.json         # Dependencies and project scripts
```

## Working with content

### Translations

English and Portuguese strings live together in [`src/i18n.js`](src/i18n.js). When adding or changing interface copy:

1. add the same translation key to both `en` and `pt`;
2. reference the key with `t('key_name')` in the component;
3. check both languages in the browser;
4. verify that longer Portuguese copy still fits on mobile.

The selected language is detected from the browser and saved locally for future visits.

### Photography

Image assets are grouped by experience under [`src/img/`](src/img/). Keep meaningful alternative text for informative images; use an empty `alt` value only for decorative images.

### Domain language

Use [`CONTEXT.md`](CONTEXT.md) before introducing product or business terminology. It distinguishes concepts such as editorial content, brand collaborations, planned products, customers, and inquiries so the code and public copy share one vocabulary.

## Deployment

Every push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The workflow:

1. installs the locked dependencies with `bun install --frozen-lockfile`;
2. runs the test suite;
3. builds the Vite application;
4. uploads `dist/` as a GitHub Pages artifact;
5. deploys the artifact with the official Pages action.

The repository's GitHub Pages source must remain set to **GitHub Actions**.

Vite uses `/sandra-website/` as its production base path so assets resolve from the repository-specific Pages URL. If the site moves to a custom domain, update `base` in [`vite.config.mjs`](vite.config.mjs) to `/` and verify every route and static asset before release.

## Current status

- The editorial redesign is live on GitHub Pages.
- English and Portuguese experiences are available.
- Automated builds and deployment from `main` are active.
- Digital products are presented visually, but production commerce is not connected.
- Product availability states and checkout behavior still need to be aligned with the planned-product domain model.

## Documentation

- [`CONTEXT.md`](CONTEXT.md) — canonical business and product vocabulary
- [`docs/adr/`](docs/adr/) — architectural decisions and their rationale
- [GitHub Actions](https://github.com/my-creations/sandra-website/actions) — build and deployment history

## License

This is a private brand project. Source code, written content, photography, and visual assets are not licensed for reuse unless permission is granted explicitly.
