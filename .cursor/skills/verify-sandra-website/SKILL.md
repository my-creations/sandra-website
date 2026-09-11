---
name: verify-sandra-website
description: "Drive Sandra Camilo's Vite + React creator-brand website the way an audience member would — HashRouter pages, EN/PT language, portfolio, planned-product catalog, contact inquiry. Use when proving UI behavior, after route/i18n/shop changes, or before trusting a Pages deploy."
---

# Verify Sandra Website (Vite web)

Primary surface: **web UI** via Vite (`bun run start` / `bun run dev`). No Playwright/Cypress e2e suite exists in-repo yet; this skill ships a Playwright drive helper. Native apps and APIs are out of scope.

Production Pages: `https://my-creations.github.io/sandra-website/` with Vite `base: "/sandra-website/"`. **Local Launch also serves under `/sandra-website/`** (same `base`). HashRouter routes appear after `/#/` — e.g. `http://127.0.0.1:5193/sandra-website/#/shop/products`. Do not drive the live Pages URL for proofs unless a feature file says so.

Harness: **Playwright** (`@playwright/test`) via `.cursor/skills/verify-sandra-website/scripts/drive.mjs`. Prefer `data-test` attributes (`nav-link-*`, `visitProductsButton`, `productPageSection`, `guideProduct*`) and visible bilingual copy over coordinates.

**Isolation:** default verification port is `5193` so it does not collide with a developer's Vite on `5173`. Never attach to an instance you did not start with Launch. Never kill by process name.

## Launch

From the repo root:

```bash
.cursor/skills/verify-sandra-website/scripts/launch.sh
```

- Starts `bun run start -- --port 5193 --strictPort` (override with `VERIFY_PORT`). `start` is Vite with `--host 0.0.0.0`; Launch still health-checks `127.0.0.1`.
- Writes `.cursor/skills/verify-sandra-website/.run/state.env` (`PID`, `PORT`, `HOST`, `BASE_PATH`, `LOG_FILE`).
- Ready when `http://127.0.0.1:5193/sandra-website/` returns HTTP 200 (timeout 90s).
- Refuses a second launch while that PID is alive.

Teardown is Cleanup (below).

## Doctor

```bash
.cursor/skills/verify-sandra-website/scripts/doctor.sh
```

Read-only. Passes only if:

1. `state.env` exists and `PID` is alive.
2. `http://$HOST:$PORT/sandra-website/` returns 200 and the HTML title/body looks like Sandra Camilo.
3. `package.json` `"name"` is `sandra-website`.

Run Doctor before the first Drive, after any failed Drive, and whenever the UI looks wedged. Dead Launch → Cleanup, then Launch again.

## Drive

Map recipes live in `features/`. Prefer the skill helper (connects to the Launch instance, writes evidence):

```bash
node .cursor/skills/verify-sandra-website/scripts/drive.mjs planned-products
# also: home | language-switch | portfolio | contact-inquiry
```

Stable handles (from components/pages):

| Surface        | Handle                                                                 |
| -------------- | ---------------------------------------------------------------------- |
| App shell URL  | `/sandra-website/#/…` (HashRouter; `BASE_PATH=/sandra-website/`)       |
| Desktop nav    | `[data-test="nav-link-home\|about\|portfolio\|shop\|contact"]`         |
| Language       | Desktop header buttons with accessible name `/^en$/i` and `/^pt$/i`    |
| Mobile menu    | `getByRole('button', { name: /Open menu/i })` (viewport &lt; lg)       |
| Shop → catalog | `[data-test="visitProductsButton"]` → `#/shop/products`                |
| Products page  | `[data-test="productPageSection"]`, `[data-test="productsPageTitle"]`  |
| Guides         | `[data-test="guidesSection"]`, `guideProduct1/2`, `guideProductStatus*` |
| Contact form   | `#/contact` — inputs `name="user_name\|user_email\|message"`           |

Drive the **user path** (nav links, language buttons, shop CTA). Do not call EmailJS from verification unless a feature recipe explicitly requires a send — default contact proof stops at fill + visible required fields (no submit to production EmailJS).

Requires Chromium for Playwright once: `bunx playwright install chromium` (after `@playwright/test` is installed).

## Evidence

Directory (survives Cleanup):

```text
.cursor/skills/verify-sandra-website/evidence/<feature-id>/
```

`drive.mjs` writes for each step: `NN-label.png`, `NN-label.aria.txt`, `NN-label.meta.json`, plus `PASS.json` on success.

Proof standards:

- Exercise the real UI path (hash route / nav / language toggle), not unit mocks.
- Capture **action and resulting state** (e.g. shop intro → products with planned badges), not only the final screen.
- Contact: prove form fields and localized placeholders; **do not** submit (EmailJS hits a live service).
- Runtime `pageerror` during Drive fails the proof.
- `.run/` is scratch; **never** store proofs only there.

After Cleanup, confirm `evidence/<feature>/` still exists and still contains the PNGs / `PASS.json`.

## Cleanup

```bash
.cursor/skills/verify-sandra-website/scripts/cleanup.sh
```

- Kills **only** the PID recorded in `state.env` (then SIGKILL that same PID if needed).
- Deletes `.run/` scratch (`state.env`, logs).
- **Does not** delete `evidence/`.

Run Cleanup after every verification session and after failed Launch/Drive iterations so ports are not stranded.

## Helpers

All under `.cursor/skills/verify-sandra-website/scripts/` (executable):

| Script       | Role                                                      |
| ------------ | --------------------------------------------------------- |
| `launch.sh`  | Start Vite; write `.run/state.env`; wait until ready      |
| `doctor.sh`  | Read-only health of that instance                         |
| `drive.mjs`  | Drive one mapped feature; write `evidence/<feature>/`     |
| `cleanup.sh` | Stop Launch PID; keep evidence                            |

Env knobs: `VERIFY_PORT` (default `5193`), `VERIFY_HOST` (default `127.0.0.1`), `VERIFY_RUN_DIR`, `VERIFY_READY_TIMEOUT_SEC` (default `90`).

## Feature map

See [`features/README.md`](features/README.md). Start with one feature per run unless maintaining the whole map via `/maintain-verification-skill`.
