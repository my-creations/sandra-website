import { useEffect } from "react";
import { COOKIE_CONSENT_KEY } from "../components/CookieConsent";

const PLAUSIBLE_DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
const PLAUSIBLE_SRC = import.meta.env.VITE_PLAUSIBLE_SRC || "https://plausible.io/js/script.js";
const SCRIPT_ID = "sandra-plausible";

function consentGiven() {
  try {
    return localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted";
  } catch {
    return false;
  }
}

function loadPlausible() {
  if (!PLAUSIBLE_DOMAIN || document.getElementById(SCRIPT_ID)) return;
  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.defer = true;
  script.dataset.domain = PLAUSIBLE_DOMAIN;
  script.src = PLAUSIBLE_SRC;
  document.head.appendChild(script);
}

/**
 * Privacy-friendly analytics stub.
 * - Disabled unless VITE_PLAUSIBLE_DOMAIN is set.
 * - Only loads after the visitor accepts the cookie banner.
 * - No cookies set by this site itself; Plausible is cookie-free.
 */
const Analytics = () => {
  useEffect(() => {
    if (!PLAUSIBLE_DOMAIN) return;
    if (consentGiven()) loadPlausible();
    const onConsent = (e) => {
      if (e.detail === "accepted") loadPlausible();
    };
    window.addEventListener("cookie-consent", onConsent);
    return () => window.removeEventListener("cookie-consent", onConsent);
  }, []);

  return null;
};

export default Analytics;
