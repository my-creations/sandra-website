import React from "react";
import { Link } from "react-router-dom";
import SandraImg from "../img/about/sandra.jpg";
import { motion } from "framer-motion";
import { transition1, fadeUp } from "../transitions";
import { useTranslation } from "react-i18next";

const About = () => {
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
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 lg:pt-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition1, delay: 0.1 }}
            className="order-2 lg:order-1 lg:col-span-5"
          >
            <div className="media-compose max-w-md lg:max-w-none">
              <div className="frame-soft aspect-[4/5]">
                <img src={SandraImg} alt={t("about_me_title")} className="media-fill" />
              </div>
              <div className="mt-3 flex justify-center">
                <span className="rounded-full bg-blush-soft px-4 py-1.5 text-[0.65rem] uppercase tracking-[0.16em] text-cocoa">
                  {t("category_travel")} · {t("category_lifestyle")}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition1, delay: 0.16 }}
            className="order-1 flex flex-col items-start text-left lg:order-2 lg:col-span-7"
          >
            <p className="eyebrow mb-4">{t("about_eyebrow")}</p>
            <h1 className="h1 mb-5 text-[2.85rem] sm:text-[3.5rem] lg:text-[4.5rem]">
              {t("about_me_title")}
            </h1>
            <div className="divider-line mb-7 ml-0" />

            <div className="space-y-5">
              <p className="body-copy max-w-xl">{t("about_me_description_1")}</p>
              <p className="body-copy max-w-xl">{t("about_me_description_2")}</p>
              <p className="max-w-xl font-primary text-xl italic leading-relaxed text-blush-deep lg:text-2xl">
                {t("about_me_description_3")}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/shop/products" className="btn-primary">
                {t("home_cta_guides")}
              </Link>
              <Link to="/contact" className="btn-secondary">
                {t("contact")}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
