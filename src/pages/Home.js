import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { transition1, fadeUp } from '../transitions';
import HeroImg from '../img/home/sandra.jpg';

const Home = () => {
  const { t } = useTranslation();

  const categories = [
    t('category_travel'),
    t('category_lifestyle'),
    t('category_recipes'),
    t('category_guides'),
  ];

  return (
    <motion.section
      initial={fadeUp.initial}
      animate={fadeUp.animate}
      exit={fadeUp.exit}
      transition={transition1}
      className="relative overflow-hidden"
    >
      {/* soft brand washes — stay behind content, never clip photos */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blush-soft/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-sage-soft/40 blur-3xl"
      />

      <div className="container-editorial relative">
        <div className="grid min-h-[calc(100vh-6.5rem)] items-center gap-8 py-8 lg:grid-cols-2 lg:gap-0 lg:py-6">
          {/* Copy column */}
          <div className="relative z-10 order-2 flex flex-col items-start text-left lg:order-1 lg:max-w-xl lg:pr-10 xl:pr-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition1, delay: 0.05 }}
              className="eyebrow mb-6"
            >
              {t('home_description')}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition1, delay: 0.1 }}
              className="script-title mb-2 text-[4.5rem] leading-none text-blush-deep sm:text-[5.75rem] lg:text-[6.5rem]"
            >
              {t('sandra')}
              <span className="mt-1 block lg:mt-2">{t('camilo')}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ ...transition1, delay: 0.18 }}
              className="my-6 h-px w-20 origin-left bg-gradient-to-r from-blush-deep to-transparent"
            />

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition1, delay: 0.2 }}
              className="mb-4 max-w-md font-primary text-[1.65rem] font-medium leading-snug text-cocoa-dark sm:text-[1.9rem] lg:text-[2.15rem]"
            >
              {t('home_headline')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition1, delay: 0.26 }}
              className="body-copy mb-8 max-w-md text-balance"
            >
              {t('home_subheadline')}
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition1, delay: 0.3 }}
              className="mb-9 flex flex-wrap gap-2"
            >
              {categories.map((category) => (
                <li key={category}>
                  <span className="chip">{category}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition1, delay: 0.36 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Link to="/shop/products" className="btn-primary">
                {t('home_cta_guides')}
              </Link>
              <Link to="/about" className="btn-secondary">
                {t('home_cta_about')}
              </Link>
            </motion.div>
          </div>

          {/* Single dominant portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...transition1, delay: 0.12 }}
            className="order-1 lg:order-2"
          >
            <div className="relative mx-auto w-full max-w-md lg:ml-auto lg:mr-0 lg:max-w-none">
              {/* subtle offset plate behind the photo */}
              <div
                aria-hidden
                className="absolute inset-3 translate-x-3 translate-y-3 rounded-[2rem] bg-blush-soft/70 sm:inset-4 sm:translate-x-4 sm:translate-y-4 lg:rounded-[2.25rem]"
              />
              <div
                aria-hidden
                className="absolute -left-3 top-1/4 hidden h-24 w-24 rounded-full border border-sage/30 lg:block"
              />

              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-cream-dark shadow-soft lg:rounded-[2.25rem]">
                <img
                  src={HeroImg}
                  alt="Sandra Camilo"
                  className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-cocoa-dark/20 to-transparent"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
