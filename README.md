# Sandra Camilo Website

A bilingual portfolio and digital-product website for Sandra Camilo's creator brand. The site presents editorial travel content, commercial collaborations, travel guides, Lightroom presets, and contact options in English and Portuguese.

## Live site

[https://my-creations.github.io/sandra-website/](https://my-creations.github.io/sandra-website/)

## Features

- Responsive editorial design
- English and Portuguese localization
- Portfolio and brand-collaboration showcases
- Travel-guide and digital-product catalog
- EmailJS contact form
- Animated page transitions and image carousels
- Hash-based routing compatible with static hosting

## Technology

- React 18
- Vite 8
- React Router 7
- Tailwind CSS 3
- Framer Motion
- i18next
- Vitest

## Requirements

- Node.js 22 or newer
- npm

## Local development

Install the locked dependencies:

```bash
npm ci
```

Start the local-only development server:

```bash
npm run dev
```

To make the server available to other devices on the local network or a Tailscale network:

```bash
npm start
```

The network server listens on port `5173` by default.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server on localhost |
| `npm start` | Start Vite on all network interfaces |
| `npm test` | Run the Vitest suite once |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Build and publish `dist/` to the `gh-pages` branch |

## GitHub Pages deployment

Pushes to `main` run [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The workflow installs locked dependencies, runs tests, builds the Vite application, uploads `dist/`, and deploys it with the official GitHub Pages actions.

In the repository settings, **Settings → Pages → Build and deployment → Source** must be set to **GitHub Actions**.

The Vite base path is `/sandra-website/`, matching the repository-specific GitHub Pages URL. Change it to `/` in [`vite.config.mjs`](vite.config.mjs) if the site later moves to a custom domain.

## Project documentation

- [`CONTEXT.md`](CONTEXT.md) defines the project's canonical domain language.
- [`docs/adr/`](docs/adr/) records architectural decisions.

## Project structure

```text
.github/workflows/   GitHub Pages deployment
public/              Static browser assets
src/components/      Shared UI components
src/context/         React context providers
src/pages/           Route-level pages
src/img/             Site photography and media
docs/adr/            Architecture decision records
```
