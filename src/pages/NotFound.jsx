import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { transition1, fadeUp } from "../transitions";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={fadeUp.initial}
      animate={fadeUp.animate}
      exit={fadeUp.exit}
      transition={transition1}
      className="page-shell"
    >
      <div className="container-editorial">
        <div className="mx-auto max-w-xl text-center lg:pt-8">
          <p className="eyebrow mb-4">{t("not_found_eyebrow")}</p>
          <h1 className="h1 mb-5 text-[3rem] sm:text-[4rem]">404</h1>
          <p className="h3 mb-4">{t("not_found_title")}</p>
          <p className="body-copy mx-auto mb-10 max-w-md">{t("not_found_copy")}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/" className="btn-primary">
              {t("not_found_home")}
            </Link>
            <Link to="/contact" className="btn-secondary">
              {t("not_found_contact")}
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default NotFound;
