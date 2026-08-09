import React from 'react';
import Sandra1 from '../img/shop/sandra_1.jpg';
import Sandra2 from '../img/shop/sandra_2.jpg';
import Sandra3 from '../img/shop/sandra_3.jpg';
import Sandra4 from '../img/shop/sandra_4.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1, fadeUp } from '../transitions';
import { useTranslation } from 'react-i18next';

const moods = [
  { src: Sandra1, label: 'Sintra', tilt: 'polaroid-tilt-left' },
  { src: Sandra2, label: 'Lisboa', tilt: 'polaroid-tilt-right' },
  { src: Sandra3, label: 'Coast', tilt: 'polaroid-tilt-left' },
  { src: Sandra4, label: 'Details', tilt: 'polaroid-tilt-right' },
];

const Shop = () => {
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
          <p className="eyebrow mb-4">{t('shop_eyebrow')}</p>
          <h1 className="h1 mb-5 text-[2.85rem] sm:text-[3.5rem] lg:text-[4.5rem]">
            {t('shop')}
          </h1>
          <div className="divider-line mb-6" />
          <p className="body-copy mx-auto mb-3 max-w-xl">
            {t('shop_description_1')}
          </p>
          <p className="body-copy mx-auto mb-3 max-w-xl">
            {t('shop_description_2')}
          </p>
          <p className="mx-auto mb-8 max-w-lg font-primary text-xl italic text-blush-deep lg:text-2xl">
            {t('shop_description_4')}
          </p>
          <Link
            to="/shop/products"
            className="btn-blush"
            data-test="visitProductsButton"
          >
            {t('visit_my_shop_button')}
          </Link>
        </motion.div>

        {/* Destination polaroids */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition1, delay: 0.14 }}
          className="polaroid-board"
        >
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10 md:grid-cols-4 lg:gap-x-7 lg:gap-y-8">
            {moods.map((mood, index) => (
              <figure
                key={mood.src}
                className={`polaroid group ${mood.tilt}`}
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <div className="polaroid-photo aspect-[3/4]">
                  <img src={mood.src} alt={mood.label} />
                </div>
                <figcaption className="polaroid-caption">{mood.label}</figcaption>
              </figure>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition1, delay: 0.24 }}
          className="mt-10 rounded-[1.75rem] border border-cocoa/5 bg-cream/80 px-6 py-8 text-center sm:px-10"
        >
          <p className="body-copy mx-auto mb-5 max-w-lg">
            {t('shop_description_3')}
          </p>
          <Link to="/shop/products" className="btn-primary">
            {t('travel_guides_title')}
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Shop;
