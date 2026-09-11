# Contact inquiry

The contact page collects collaboration, press, or general inquiries and submits them through EmailJS. Verification proves the form path without sending a live message.

## Sub-features

- `contact-open` opens `/#/contact` from nav.
- `contact-fields` shows name, email, and message inputs with localized placeholders.
- `contact-fill` fills a dry-run inquiry without submitting.
- `contact-send` (out of scope for default Drive) would hit EmailJS — only exercise behind an explicit mock or disposable service.

## How to get to it (user POV)

- Choose **Contact** / **Contacta-me** path via `nav-link-contact`.
- Open `/#/contact` directly.

## Driving it with Playwright (`drive.mjs`)

Preconditions:

- Launch + Doctor green.
- Force English for **Contact me** / **Send message**.

- **Open contact.** Click `[data-test="nav-link-contact"]`. Heading **Contact me**.
- **Fill without send.** Fill `user_name`, `user_email`, `message`. Confirm **Send message** is visible. **Do not click it.**
- **Proof.** `node .cursor/skills/verify-sandra-website/scripts/drive.mjs contact-inquiry`.

## Gotchas

- EmailJS service/template/public keys are hardcoded in `Contact.jsx` — a real submit emails Sandra’s account.
- HTML5 `required` blocks empty submits; filled dry-run is enough for UI proof.
- Toast success/error only appears after a real EmailJS response — do not require toasts in the default recipe.
