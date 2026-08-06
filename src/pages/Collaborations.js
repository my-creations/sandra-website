import React from 'react';
import { motion } from 'framer-motion';
import { transition1, fadeUp } from '../transitions';
import Carousel from '../components/Carousel';
import ChaoDoRio1 from '../img/collaborations/ChaoDoRio/ChaoDoRio1.JPEG';
import ChaoDoRio2 from '../img/collaborations/ChaoDoRio/ChaoDoRio2.JPEG';
import ChaoDoRio3 from '../img/collaborations/ChaoDoRio/ChaoDoRio3.JPEG';
import ChaoDoRio4 from '../img/collaborations/ChaoDoRio/ChaoDoRio4.JPEG';
import SantaMariaBejuco1 from '../img/collaborations/SantaMariaBejuco/SantaMariaBejuco1.JPEG';
import SantaMariaBejuco2 from '../img/collaborations/SantaMariaBejuco/SantaMariaBejuco2.JPEG';
import SantaMariaBejuco3 from '../img/collaborations/SantaMariaBejuco/SantaMariaBejuco3.JPEG';
import SantaMariaBejuco4 from '../img/collaborations/SantaMariaBejuco/SantaMariaBejuco4.JPEG';
import { useTranslation } from 'react-i18next';

const CollaborationBlock = ({
  title,
  href,
  images,
  reverse = false,
  cta,
  eyebrow,
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ ...transition1, delay }}
    className={`grid items-center gap-6 rounded-[1.75rem] border border-cocoa/5 bg-cream/70 p-5 shadow-card sm:p-7 lg:grid-cols-2 lg:gap-8 ${
      reverse ? 'lg:[&>*:first-child]:order-2' : ''
    }`}
  >
    <div className="frame-soft">
      <Carousel autoSlide>
        {images.map((image, index) => (
          <img
            key={`${title}-${index}`}
            className="aspect-[5/4] w-full object-cover object-center"
            alt={`${title} ${index + 1}`}
            src={image}
          />
        ))}
      </Carousel>
    </div>

    <div className="flex flex-col items-start text-left">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h3 className="h3 mb-6 text-[2rem] lg:text-[2.5rem]">{title}</h3>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary"
      >
        {cta}
      </a>
    </div>
  </motion.div>
);

const Collaborations = () => {
  const { t } = useTranslation();
  const imagesFirstCollaboration = [
    SantaMariaBejuco1,
    SantaMariaBejuco2,
    SantaMariaBejuco3,
    SantaMariaBejuco4,
  ];
  const imagesSecondCollaboration = [
    ChaoDoRio1,
    ChaoDoRio2,
    ChaoDoRio3,
    ChaoDoRio4,
  ];

  return (
    <motion.section
      initial={fadeUp.initial}
      animate={fadeUp.animate}
      exit={fadeUp.exit}
      transition={transition1}
      className="page-shell"
    >
      <div className="container-editorial">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16 lg:pt-4">
          <p className="eyebrow mb-4">{t('collaborations_eyebrow')}</p>
          <h1 className="h1 mb-5 text-[3rem] sm:text-[3.75rem] lg:text-[5rem]">
            {t('collaborations')}
          </h1>
          <div className="divider-line" />
        </div>

        <div className="space-y-10 pb-8">
          <CollaborationBlock
            title={t('collaboration_1_title')}
            href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDMyNzgzNzUyNTIyMjQw?igsh=MWIxcTBtdWhubzkweQ=="
            images={imagesFirstCollaboration}
            cta={t('view_collaboration_button')}
            eyebrow={t('collaborations_eyebrow')}
            delay={0.1}
          />
          <CollaborationBlock
            title={t('collaboration_2_title')}
            href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDU2ODAxNTAzNTY1MDY5?igsh=ZjR0a29rNThyeTln"
            images={imagesSecondCollaboration}
            cta={t('view_collaboration_button')}
            eyebrow={t('collaborations_eyebrow')}
            reverse
            delay={0.18}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Collaborations;
