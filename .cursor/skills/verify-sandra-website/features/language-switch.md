# Language switch

Audience members can flip the UI between English and Portuguese; nav labels and page copy update immediately. Preference is remembered via i18next language detection / local storage.

## Sub-features

- `lang-en` forces English copy and **Home** nav label.
- `lang-pt` forces Portuguese copy and **Início** nav label.
- `lang-roundtrip` returns to English without a full reload.
- `lang-mobile` (manual / future) uses the language control inside the mobile drawer.

## How to get to it (user POV)

- On desktop (≥ lg), use the **en** / **pt** pill buttons in the header.
- On mobile, open the menu (`Open menu`) and use the same pills at the bottom of the drawer.

## Driving it with Playwright (`drive.mjs`)

Preconditions:

- Launch + Doctor green.
- Desktop viewport (1280×800) so header language controls are visible.

- **Force EN.** Click `getByRole('button', { name: /^en$/i })`. Home shows `Stories with soul, journeys with heart`; nav home is **Home**.
- **Switch PT.** Click `getByRole('button', { name: /^pt$/i })`. Home shows `Histórias com alma, viagens com coração`; nav home is **Início**.
- **Back to EN.** Click **en** again; English headline returns.
- **Proof.** `node .cursor/skills/verify-sandra-website/scripts/drive.mjs language-switch`.

## Gotchas

- Buttons are labeled exactly `en` / `pt` (lowercase). Role name regex must be anchored.
- Mobile language control is hidden unless `ChangeLanguage` is rendered with `visible` inside `MobileNav`.
- Do not assert `localStorage` alone — prove via visible copy.
