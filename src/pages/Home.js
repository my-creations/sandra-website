import React from "react";
import SandraImg from "../img/home/sandra.jpg";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ transition1 }}
      className="section lg:overflow-hidden relative min-h-screen lg:min-h-auto"
    >
      <div className="container mx-auto relative h-full">
        {/* text & img wrapper */}
        <div className="flex flex-col justify-start lg:justify-center h-full lg:h-auto">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={{ transition1 }}
            className="w-full pt-8 pb-14 lg:mb-12 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:z-30 lg:absolute flex flex-col justify-start lg:justify-center items-center lg:items-start relative"
          >
            {/* Mobile title: horizontal display */}
            <h1 className="h1 text-pink block lg:hidden">
              {t('sandra')} {t('camilo')}
            </h1>

            {/* Desktop title: vertical display */}
            <h1 className="h1 text-pink hidden lg:block">
              {t('sandra')}<br />{t('camilo')}
            </h1>

            <p className="h2 text-[16px] lg:text-[20px] text-center lg:text-left lg:-ml-24">
            {t('home_description')}
            </p>
          </motion.div>
          {/* img */}
          <div className="flex justify-center lg:justify-end lg:ml-10 absolute inset-0 top-44 lg:top-0 lg:relative lg:inset-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ transition1 }}
              className="relative lg:right-20 overflow-hidden rounded-none lg:rounded-3xl w-full h-full lg:w-auto lg:h-auto"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={SandraImg}
                alt=""
                className="w-full h-full object-cover lg:w-auto lg:h-auto lg:rounded-3xl"
              />
              {/* Top fade overlay for smaller devices - positioned over the image */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-10 lg:hidden"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
