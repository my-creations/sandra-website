import { describe, expect, it } from "vitest";
import { resources } from "../src/i18n.js";
import { TITLE_KEYS } from "../src/utils/pageTitles.js";

const en = resources.en.translation;
const pt = resources.pt.translation;

describe("i18n locale parity", () => {
  it("has the same keys in EN and PT", () => {
    const enKeys = Object.keys(en).sort();
    const ptKeys = Object.keys(pt).sort();
    expect(ptKeys).toEqual(enKeys);
  });

  it("has no empty translations", () => {
    for (const [locale, dict] of [
      ["en", en],
      ["pt", pt],
    ]) {
      for (const [key, value] of Object.entries(dict)) {
        expect(typeof value, `${locale}.${key} should be a string`).toBe("string");
        expect(value.trim().length, `${locale}.${key} should not be empty`).toBeGreaterThan(0);
      }
    }
  });
});

describe("route titles resolve in both locales", () => {
  it("every titled route has a translation key in EN and PT", () => {
    for (const key of Object.values(TITLE_KEYS)) {
      if (key === null) continue;
      expect(en[key], `en should define title key "${key}"`).toBeDefined();
      expect(pt[key], `pt should define title key "${key}"`).toBeDefined();
    }
  });
});

describe("planned-product catalog stays non-purchasable", () => {
  it("labels planned products as coming-soon in both locales", () => {
    expect(en.planned_product_label).toMatch(/coming soon/i);
    expect(pt.planned_product_label).toMatch(/em breve/i);
  });
});

describe("contact form copy", () => {
  it("has name, email and message fields plus send feedback in both locales", () => {
    for (const dict of [en, pt]) {
      for (const key of [
        "name_placeholder",
        "email_placeholder",
        "message_placeholder",
        "send_button",
        "email_sent_success_message",
        "email_error_message",
      ]) {
        expect(dict[key], `contact key "${key}" should exist`).toBeDefined();
      }
    }
  });
});
