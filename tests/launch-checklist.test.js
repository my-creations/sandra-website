import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { resources } from "../src/i18n.js";
import { DESCRIPTION_KEYS, TITLE_KEYS, descriptionForPath } from "../src/utils/pageTitles.js";

const root = new URL("..", import.meta.url).pathname;
const read = (rel) => readFileSync(join(root, rel), "utf8");
const en = resources.en.translation;
const pt = resources.pt.translation;

describe("launch checklist: legal routes", () => {
  it("covers privacy and terms in titles, descriptions and sitemap", () => {
    for (const route of ["/privacy", "/terms"]) {
      expect(TITLE_KEYS, `TITLE_KEYS should cover ${route}`).toHaveProperty(route);
      expect(DESCRIPTION_KEYS, `DESCRIPTION_KEYS should cover ${route}`).toHaveProperty(route);
    }
    const sitemap = read("public/sitemap.xml");
    expect(sitemap).toContain("/#/privacy");
    expect(sitemap).toContain("/#/terms");
    for (const key of ["privacy", "terms", "privacy_title", "terms_title"]) {
      expect(en[key]).toBeDefined();
      expect(pt[key]).toBeDefined();
    }
  });

  it("has legal pages and a 404 route wired", () => {
    expect(existsSync(join(root, "src/pages/Privacy.jsx"))).toBe(true);
    expect(existsSync(join(root, "src/pages/Terms.jsx"))).toBe(true);
    expect(existsSync(join(root, "src/pages/NotFound.jsx"))).toBe(true);
    const routes = read("src/components/AnimRoutes.jsx");
    expect(routes).toContain('path="/privacy"');
    expect(routes).toContain('path="/terms"');
    expect(routes).toContain('path="*"');
    const app = read("src/App.jsx");
    expect(app).toContain("Footer");
    expect(app).toContain("CookieConsent");
  });
});

describe("launch checklist: secrets and spam", () => {
  it("does not hardcode EmailJS IDs in the contact page", () => {
    const contact = read("src/pages/Contact.jsx");
    expect(contact).not.toContain("service_n34xk3l");
    expect(contact).not.toContain("template_reha55o");
    expect(contact).not.toContain("7e0LUvjNuAd9HHdsW");
    expect(contact).toContain("EMAILJS_SERVICE_ID");
    expect(existsSync(join(root, "src/config/emailjs.js"))).toBe(true);
    expect(existsSync(join(root, ".env.example"))).toBe(true);
  });

  it("hardens the form with honeypot, time-trap and length validation", () => {
    const contact = read("src/pages/Contact.jsx");
    expect(contact).toContain('name="company"');
    expect(contact).toContain("MIN_SUBMIT_MS");
    expect(contact).toContain("minLength");
    expect(contact).toContain("maxLength");
  });
});

describe("launch checklist: meta and consent", () => {
  it("has per-route descriptions in both locales", () => {
    for (const key of Object.values(DESCRIPTION_KEYS)) {
      expect(en[key], `en should define ${key}`).toBeDefined();
      expect(pt[key], `pt should define ${key}`).toBeDefined();
    }
    const t = (key) => en[key] ?? key;
    expect(descriptionForPath("/about", t)).toContain("Sandra");
    expect(descriptionForPath("/nope", t)).toContain("Sandra Camilo");
  });

  it("ships a consent-gated analytics stub", () => {
    expect(existsSync(join(root, "src/components/CookieConsent.jsx"))).toBe(true);
    expect(existsSync(join(root, "src/components/Analytics.jsx"))).toBe(true);
    const analytics = read("src/components/Analytics.jsx");
    expect(analytics).toContain("VITE_PLAUSIBLE_DOMAIN");
    expect(analytics).toContain("cookie-consent");
    const html = read("index.html");
    expect(html).toContain('name="twitter:card" content="summary_large_image"');
  });
});

describe("launch checklist: images and a11y", () => {
  it("has no empty alt attributes in page sources", () => {
    for (const rel of [
      "src/pages/Contact.jsx",
      "src/pages/Products.jsx",
      "src/pages/Portfolio.jsx",
      "src/pages/Home.jsx",
    ]) {
      expect(read(rel), `${rel} should not contain alt=""`).not.toContain('alt=""');
    }
  });

  it("lazy-loads below-the-fold imagery", () => {
    for (const rel of [
      "src/pages/Portfolio.jsx",
      "src/pages/Products.jsx",
      "src/pages/Shop.jsx",
      "src/pages/Collaborations.jsx",
    ]) {
      expect(read(rel), `${rel} should lazy-load images`).toContain('loading="lazy"');
    }
  });
});
