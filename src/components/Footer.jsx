import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cocoa/10 bg-cream-soft/60">
      <div className="container-editorial flex flex-col items-center gap-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-primary text-lg text-cocoa-dark">
          Sandra Camilo <span className="text-cocoa-light">· {t("footer_tagline")}</span>
        </p>
        <nav aria-label="Legal" className="flex items-center gap-6">
          <Link to="/privacy" className="nav-link">
            {t("privacy")}
          </Link>
          <Link to="/terms" className="nav-link">
            {t("terms")}
          </Link>
        </nav>
      </div>
      <div className="border-t border-cocoa/5">
        <p className="container-editorial py-4 text-center text-xs uppercase tracking-[0.18em] text-cocoa-light sm:text-left">
          © {year} Sandra Camilo · {t("footer_rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
