import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const COOKIE_CONSENT_KEY = "sandra-cookie-consent";

export function readConsent() {
  try {
    return localStorage.getItem(COOKIE_CONSENT_KEY);
  } catch {
    return null;
  }
}

const CookieConsent = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!readConsent()) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const choose = (value) => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, value);
    } catch {
      // storage unavailable — banner just hides for this session
    }
    setVisible(false);
    // Notify the analytics loader without a page reload.
    window.dispatchEvent(new CustomEvent("cookie-consent", { detail: value }));
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl rounded-[1.5rem] border border-cocoa/10 bg-cream-soft/95 p-5 shadow-soft backdrop-blur-md sm:p-6"
    >
      <p className="body-copy mb-4 text-sm">{t("cookie_banner_copy")}</p>
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => choose("accepted")}
          className="btn-primary px-6 py-2.5"
        >
          {t("cookie_accept")}
        </button>
        <button
          type="button"
          onClick={() => choose("declined")}
          className="btn-secondary px-6 py-2.5"
        >
          {t("cookie_decline")}
        </button>
        <Link to="/privacy" className="nav-link ml-auto">
          {t("privacy")}
        </Link>
      </div>
    </div>
  );
};

export default CookieConsent;
