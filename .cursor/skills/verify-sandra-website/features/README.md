# Sandra Website verification map

Maintained recipes for proving user-facing Vite/React behavior. Read this index, Launch + Doctor the app, then follow one feature file.

## Baseline preconditions

- Launch via `.cursor/skills/verify-sandra-website/scripts/launch.sh` (Vite at `http://127.0.0.1:5193/sandra-website/` by default).
- Doctor must pass before Drive.
- App uses **HashRouter**: routes are `/sandra-website/#/…` (same Vite `base` locally and on Pages).
- Prefer `data-test` attributes and bilingual visible copy over coordinates.
- Never drive an instance you did not start with Launch.
- Desktop viewport (≥1024px) exposes header language buttons and `nav-link-*`; mobile uses Open menu.

## Driving conventions

- Start each recipe from a fresh home hash load unless the feature says otherwise.
- Force English with the `en` button when asserting English copy (browser language detection can land on `pt`).
- Capture action + resulting state under `evidence/<feature-id>/`.
- Report unreachable paths with the attempted command and unmet precondition — do not claim a different entry point as the same proof.
- Contact inquiry proofs must not click **Send message** (EmailJS is live).

## Features

- [Home / editorial landing](./home.md) — hero, CTAs, about via nav.
- [Language switch](./language-switch.md) — EN ↔ PT remembered UI copy.
- [Portfolio](./portfolio.md) — visual portfolio and collaborations.
- [Planned products catalog](./planned-products.md) — shop intro → products with Coming soon.
- [Contact inquiry](./contact-inquiry.md) — inquiry form fields without sending.
