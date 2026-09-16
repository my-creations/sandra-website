#!/usr/bin/env node
/**
 * Drive one mapped feature against the Launch instance and write evidence.
 *
 * Usage (from repo root):
 *   node .cursor/skills/verify-sandra-website/scripts/drive.mjs planned-products
 *   node .cursor/skills/verify-sandra-website/scripts/drive.mjs home
 *   node .cursor/skills/verify-sandra-website/scripts/drive.mjs language-switch
 *   node .cursor/skills/verify-sandra-website/scripts/drive.mjs portfolio
 *   node .cursor/skills/verify-sandra-website/scripts/drive.mjs contact-inquiry
 *
 * Requires: launch.sh + doctor.sh already green. Uses Playwright from node_modules.
 * Test ids in this app use data-test= (not data-testid).
 */
import { chromium } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SKILL_DIR = path.resolve(__dirname, "..");
const RUN_DIR = process.env.VERIFY_RUN_DIR || path.join(SKILL_DIR, ".run");
const STATE_FILE = path.join(RUN_DIR, "state.env");

function loadState() {
  if (!fs.existsSync(STATE_FILE)) {
    throw new Error(`Missing ${STATE_FILE}. Run scripts/launch.sh first.`);
  }
  const out = {};
  for (const line of fs.readFileSync(STATE_FILE, "utf8").split("\n")) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m) out[m[1]] = m[2];
  }
  return out;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function hashUrl(basePath, route = "/") {
  const normalized = route.startsWith("/") ? route : `/${route}`;
  return `${basePath}#${normalized === "/" ? "/" : normalized}`;
}

async function ariaDump(page) {
  const snapshot = await page.locator("body").ariaSnapshot();
  return typeof snapshot === "string" ? snapshot : String(snapshot);
}

async function proof(page, evidenceDir, label) {
  ensureDir(evidenceDir);
  const shot = path.join(evidenceDir, `${label}.png`);
  const aria = path.join(evidenceDir, `${label}.aria.txt`);
  await page.screenshot({ path: shot, fullPage: true });
  fs.writeFileSync(aria, await ariaDump(page), "utf8");
  const meta = {
    label,
    url: page.url(),
    capturedAt: new Date().toISOString(),
    title: await page.title(),
  };
  fs.writeFileSync(path.join(evidenceDir, `${label}.meta.json`), JSON.stringify(meta, null, 2));
  console.log(`Evidence: ${shot}`);
  console.log(`Evidence: ${aria}`);
}

function dataTest(page, id) {
  return page.locator(`[data-test="${id}"]`);
}

async function gotoHash(page, basePath, route) {
  await page.goto(hashUrl(basePath, route));
  await page.waitForLoadState("domcontentloaded");
}

async function driveHome(page, evidenceDir, basePath) {
  await gotoHash(page, basePath, "/");
  await page
    .getByRole("img", { name: /Sandra Camilo/i })
    .first()
    .waitFor({ state: "visible" });
  await page
    .getByText(/Stories with soul|Histórias com alma/i)
    .first()
    .waitFor({ state: "visible" });
  await proof(page, evidenceDir, "01-home");

  await dataTest(page, "nav-link-about").click();
  await page.waitForURL(/#\/about/);
  await page.getByRole("heading", { name: /About me|Sobre mim/i }).waitFor({ state: "visible" });
  await proof(page, evidenceDir, "02-about-via-nav");
}

async function driveLanguageSwitch(page, evidenceDir, basePath) {
  await gotoHash(page, basePath, "/");
  // Force EN first (desktop language control is lg+; viewport is 1280).
  await page.getByRole("button", { name: /^en$/i }).click();
  await dataTest(page, "nav-link-home").waitFor({ state: "visible" });
  await page.getByText("Stories with soul, journeys with heart").waitFor({ state: "visible" });
  await proof(page, evidenceDir, "01-english");

  await page.getByRole("button", { name: /^pt$/i }).click();
  await page.getByText("Histórias com alma, viagens com coração").waitFor({ state: "visible" });
  await dataTest(page, "nav-link-home").filter({ hasText: "Início" }).waitFor({ state: "visible" });
  await proof(page, evidenceDir, "02-portuguese");

  await page.getByRole("button", { name: /^en$/i }).click();
  await page.getByText("Stories with soul, journeys with heart").waitFor({ state: "visible" });
  await proof(page, evidenceDir, "03-back-to-english");
}

async function drivePortfolio(page, evidenceDir, basePath) {
  await gotoHash(page, basePath, "/");
  await page.getByRole("button", { name: /^en$/i }).click();
  await dataTest(page, "nav-link-portfolio").click();
  await page.waitForURL(/#\/portfolio$/);
  await page.getByRole("heading", { name: /^Portfolio$/i }).waitFor({ state: "visible" });
  await page.getByText("Through the lens").waitFor({ state: "visible" });
  await proof(page, evidenceDir, "01-portfolio");

  await page.getByRole("link", { name: /View collaborations/i }).click();
  await page.waitForURL(/#\/portfolio\/collaborations/);
  await page.getByText(/Santa Maria Bejuco Home/i).waitFor({ state: "visible" });
  await page.getByText(/Chão do Rio|Chao do Rio/i).waitFor({ state: "visible" });
  await proof(page, evidenceDir, "02-collaborations");
}

async function drivePlannedProducts(page, evidenceDir, basePath) {
  await gotoHash(page, basePath, "/");
  await page.getByRole("button", { name: /^en$/i }).click();
  await dataTest(page, "nav-link-shop").click();
  await page.waitForURL(/#\/shop$/);
  await page.getByRole("heading", { name: /^Guides$/i }).waitFor({ state: "visible" });
  await dataTest(page, "visitProductsButton").waitFor({ state: "visible" });
  await proof(page, evidenceDir, "01-shop-intro");

  await dataTest(page, "visitProductsButton").click();
  await page.waitForURL(/#\/shop\/products/);
  await dataTest(page, "productPageSection").waitFor({ state: "visible" });
  await dataTest(page, "productsPageTitle").waitFor({ state: "visible" });
  await dataTest(page, "guidesSection").waitFor({ state: "visible" });
  await dataTest(page, "guideProduct1").waitFor({ state: "visible" });
  await dataTest(page, "guideProduct2").waitFor({ state: "visible" });
  await dataTest(page, "guideProductTitle1")
    .filter({ hasText: "Sintra Guide" })
    .waitFor({ state: "visible" });
  await dataTest(page, "guideProductStatus1")
    .filter({ hasText: "Coming soon" })
    .waitFor({ state: "visible" });
  await dataTest(page, "guideProductStatus2")
    .filter({ hasText: "Coming soon" })
    .waitFor({ state: "visible" });
  // Bundles / presets are intentionally hidden planned inventory — must stay out of the main catalog.
  if (await dataTest(page, "bundlesSection").isVisible()) {
    throw new Error("bundlesSection should remain hidden for planned-only catalog");
  }
  await proof(page, evidenceDir, "02-products-planned");
}

async function driveContactInquiry(page, evidenceDir, basePath) {
  await gotoHash(page, basePath, "/");
  await page.getByRole("button", { name: /^en$/i }).click();
  await dataTest(page, "nav-link-contact").click();
  await page.waitForURL(/#\/contact/);
  await page.getByRole("heading", { name: /Contact me/i }).waitFor({ state: "visible" });
  await proof(page, evidenceDir, "01-contact-open");

  await page.locator('input[name="user_name"]').fill("Verification Bot");
  await page.locator('input[name="user_email"]').fill("verify@example.com");
  await page.locator('textarea[name="message"]').fill("Dry-run inquiry — do not submit.");
  await page.getByRole("button", { name: /Send message/i }).waitFor({ state: "visible" });
  // Intentionally do NOT click submit — EmailJS is a live production boundary.
  await proof(page, evidenceDir, "02-form-filled-no-submit");
}

const drivers = {
  home: driveHome,
  "language-switch": driveLanguageSwitch,
  portfolio: drivePortfolio,
  "planned-products": drivePlannedProducts,
  "contact-inquiry": driveContactInquiry,
};

async function main() {
  const feature = process.argv[2];
  if (!feature || !drivers[feature]) {
    console.error(`Usage: drive.mjs <${Object.keys(drivers).join("|")}>`);
    process.exit(2);
  }

  const state = loadState();
  const host = state.HOST || "127.0.0.1";
  const port = state.PORT;
  const basePath = state.BASE_PATH || "/sandra-website/";
  const origin = `http://${host}:${port}`;
  const evidenceDir = path.join(SKILL_DIR, "evidence", feature);
  ensureDir(evidenceDir);

  for (const f of fs.readdirSync(evidenceDir)) {
    if (f === ".gitkeep") continue;
    fs.rmSync(path.join(evidenceDir, f), { recursive: true, force: true });
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    baseURL: origin,
    viewport: { width: 1280, height: 800 },
    locale: "en-US",
  });
  const page = await context.newPage();
  page.setDefaultTimeout(30_000);

  const runtimeErrors = [];
  page.on("pageerror", (e) => runtimeErrors.push(e.message));

  try {
    console.log(`Driving feature=${feature} at ${origin}${basePath}`);
    await drivers[feature](page, evidenceDir, basePath);
    if (runtimeErrors.length) {
      throw new Error(`Page errors during drive: ${runtimeErrors.join(" | ")}`);
    }
    fs.writeFileSync(
      path.join(evidenceDir, "PASS.json"),
      JSON.stringify(
        {
          feature,
          origin,
          basePath,
          passedAt: new Date().toISOString(),
        },
        null,
        2,
      ),
    );
    console.log(`PASS ${feature}`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
