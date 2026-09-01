import React from "react";
import { useTranslation } from "react-i18next";

const ChangeLanguage = ({ visible = false }) => {
  const { i18n } = useTranslation();
  const current = (i18n.language || "en").slice(0, 2);
  const visibilityClass = visible ? "flex" : "hidden lg:flex";

  const setLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={`${visibilityClass} items-center`}>
      <div className="flex items-center gap-1 rounded-full border border-cocoa/10 bg-cream/70 p-1">
        {["en", "pt"].map((lng) => (
          <button
            key={lng}
            type="button"
            onClick={() => setLanguage(lng)}
            className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] transition ${
              current === lng
                ? "bg-cocoa text-cream-soft shadow-sm"
                : "text-cocoa-light hover:text-cocoa-dark"
            }`}
          >
            {lng}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChangeLanguage;
