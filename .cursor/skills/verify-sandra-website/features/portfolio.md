# Portfolio

The portfolio showcases curated visual work as polaroid prints and links into brand collaboration stories.

## Sub-features

- `portfolio-open` opens `/#/portfolio` from desktop nav.
- `portfolio-grid` shows labeled polaroid prints.
- `portfolio-to-collab` follows **View collaborations** to `/#/portfolio/collaborations`.
- `collab-stories` shows Santa Maria Bejuco Home and Chão do Rio blocks.

## How to get to it (user POV)

- Choose **Portfolio** / **Portfólio** in the header (or mobile menu).
- From Portfolio, choose **View collaborations** / the localized CTA.
- Open `/#/portfolio` or `/#/portfolio/collaborations` directly.

## Driving it with Playwright (`drive.mjs`)

Preconditions:

- Launch + Doctor green.
- Force English for stable CTA copy.

- **Open portfolio.** Click `[data-test="nav-link-portfolio"]`. Heading **Portfolio**; eyebrow **Through the lens**.
- **Open collaborations.** Click link **View collaborations**. URL `#/portfolio/collaborations`; titles **Santa Maria Bejuco Home** and **Chão do Rio** visible.
- **Proof.** `node .cursor/skills/verify-sandra-website/scripts/drive.mjs portfolio`.

## Gotchas

- Some polaroids are `hidden md:block` — a mobile viewport shows fewer prints; that is expected.
- Collaboration external CTAs open new tabs; do not require those destinations for in-app proof.
