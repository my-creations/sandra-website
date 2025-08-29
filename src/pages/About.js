import React from "react";
import SandraImg from "../img/about/sandra.jpg";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{ transition1 }}
      className="section lg:overflow-hidden relative min-h-screen lg:min-h-auto"
    >
      <div className="container mx-auto h-full relative">
        {/* text & img wrapper */}
        <div className="flex flex-col lg:flex-row h-full lg:items-center lg:justify-center text-center lg:text-left lg:pt-16 relative">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={{ transition1 }}
            className="flex-1 lg:pt-0 lg:w-auto z-30 flex flex-col justify-start lg:justify-center items-center lg:items-center text-center order-1 lg:order-none pt-8 pb-8"
          >
            <h1 className="h1 text-pink mb-4 lg:mb-8">{t('about_me_title')}</h1>
            <p className="mb-8 max-w-sm lg:text-lg mx-6">
            {t('about_me_description_1')}
            </p>
            <p className="mb-8 max-w-sm lg:text-lg mx-6">
            {t('about_me_description_2')}
            </p>
            <p className="mb-8 max-w-sm lg:text-lg mx-6 text-pink font-semibold">
            {t('about_me_description_3')}
            </p>
          </motion.div>
          {/* image */}
          <div className="flex-1 lg:max-h-max order-2 lg:order-none">
            <div className="relative overflow-hidden rounded-t-3xl lg:rounded-3xl w-full h-full lg:w-auto lg:h-full">
              <img className="w-full h-full object-cover lg:w-auto lg:h-auto lg:rounded-3xl" src={SandraImg} alt="" />
              {/* Top fade overlay for smaller devices - positioned over the image */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-10 lg:hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
