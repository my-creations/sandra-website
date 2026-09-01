import React from "react";
import Sandra1 from "../img/portfolio/sandra_1.jpg";
import Sandra2 from "../img/portfolio/sandra_2.jpg";
import Sandra3 from "../img/portfolio/sandra_3.jpg";
import Sandra4 from "../img/portfolio/sandra_4.jpg";
import Sandra5 from "../img/portfolio/sandra_5.jpg";
import Sandra6 from "../img/portfolio/sandra_6.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1, fadeUp } from "../transitions";
import { useTranslation } from "react-i18next";

const prints = [
  { src: Sandra5, labelKey: "portfolio_label_1", tilt: "polaroid-tilt-left" },
  { src: Sandra6, labelKey: "portfolio_label_2", tilt: "polaroid-tilt-right" },
  { src: Sandra3, labelKey: "portfolio_label_3", tilt: "polaroid-tilt-right" },
  { src: Sandra4, labelKey: "portfolio_label_4", tilt: "polaroid-tilt-left" },
  { src: Sandra1, labelKey: "portfolio_label_5", tilt: "polaroid-tilt-left" },
  { src: Sandra2, labelKey: "portfolio_label_6", tilt: "polaroid-tilt-right" },
];

const Portfolio = () => {
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
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition1, delay: 0.06 }}
          className="mx-auto mb-10 max-w-2xl text-center lg:mb-12 lg:pt-2"
        >
          <p className="eyebrow mb-4">{t("portfolio_eyebrow")}</p>
          <h1 className="h1 mb-5 text-[2.85rem] sm:text-[3.5rem] lg:text-[4.5rem]">
            {t("portfolio")}
          </h1>
          <div className="divider-line mb-6" />
          <p className="body-copy mx-auto mb-4 max-w-xl">{t("portfolio_description_1")}</p>
          <p className="mx-auto mb-8 max-w-lg font-primary text-xl italic text-blush-deep lg:text-2xl">
            {t("portfolio_description_2")}
          </p>
          <Link to="/portfolio/collaborations" className="btn-primary">
            {t("view_more_button")}
          </Link>
        </motion.div>

        <div className="polaroid-board">
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10 md:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
            {prints.map((item, index) => {
              const label = t(item.labelKey);
              return (
                <motion.figure
                  key={item.src}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...transition1, delay: 0.1 + index * 0.05 }}
                  className={`polaroid group ${item.tilt} ${index >= 4 ? "hidden md:block" : ""}`}
                >
                  <div className="polaroid-photo aspect-[4/5]">
                    <img src={item.src} alt={label} />
                  </div>
                </motion.figure>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
