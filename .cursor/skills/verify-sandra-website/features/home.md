# Home / editorial landing

The editorial homepage introduces Sandra Camilo with hero photography, bilingual headline copy, category chips, and CTAs into guides and about.

## Sub-features

- `home-open` loads `/#/` with the Sandra hero and brand title.
- `home-headline` shows the editorial headline for the active language.
- `home-cta-guides` links to `/#/shop/products`.
- `home-cta-about` links to `/#/about`.
- `home-nav-about` reaches About via desktop `nav-link-about`.

## How to get to it (user POV)

- Open the site root (`/sandra-website/#/`).
- Choose the logo / **Home** / **Início** nav link.
- Choose **Meet Sandra** / **Conhecer a Sandra** on the home CTAs.

## Driving it with Playwright (`drive.mjs`)

Preconditions:

- Launch + Doctor green.
- Prefer English (`en` button) when asserting English strings.

- **Open home.** `page.goto('/sandra-website/#/')`. Hero `img[alt="Sandra Camilo"]` visible; headline matches EN or PT.
- **Nav to About.** Click `[data-test="nav-link-about"]`. URL `#/about`; heading **About me** / **Sobre mim**.
- **Proof.** `node .cursor/skills/verify-sandra-website/scripts/drive.mjs home` → `evidence/home/01-home.png` and `02-about-via-nav.png`.

## Gotchas

- Vite `base` means the document URL always includes `/sandra-website/` even in local Launch.
- Language detection may start in Portuguese — assert with a flexible regex or force `en` first.
- Framer Motion route transitions briefly unmount pages; wait on headings, not only URL.
