import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { transition1, fadeUp } from '../transitions';
import Bundle1 from '../img/about/sandra.jpg';
import Bundle2 from '../img/about/sandra.jpg';
import GuideSintra from '../img/shop/sandra_1.jpg';
import GuideSintraAlt from '../img/portfolio/sandra_2.jpg';
import GuideLisbon from '../img/shop/sandra_3.jpg';
import GuideLisbonAlt from '../img/portfolio/sandra_5.jpg';
import Preset1 from '../img/about/sandra.jpg';
import Preset2 from '../img/about/sandra.jpg';

const PRODUCT_AVAILABILITY = {
  PLANNED: 'planned',
};

const ProductAvailability = ({ testId, availability, plannedLabel }) => {
  if (availability !== PRODUCT_AVAILABILITY.PLANNED) {
    return null;
  }

  return (
    <p
      data-test={testId}
      testID={testId}
      className="inline-flex rounded-full border border-cocoa/15 bg-cream-dark/60 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-cocoa"
    >
      {plannedLabel}
    </p>
  );
};

const GuideCard = ({
  testId,
  titleTestId,
  statusTestId,
  title,
  description,
  cover,
  accent,
  availability,
  plannedLabel,
  tilt = 'polaroid-tilt-none',
}) => (
  <article
    data-test={testId}
    testID={testId}
    className="flex h-full flex-col items-center"
  >
    {/* Polaroid cover */}
    <div className={`polaroid group w-full max-w-sm ${tilt}`}>
      <div className="polaroid-photo aspect-[4/5]">
        <img src={cover} alt={title} />
      </div>
      <p className="polaroid-caption">{title}</p>

      {accent && (
        <div className="absolute -bottom-2 -right-3 hidden w-[30%] rotate-[6deg] sm:block">
          <div className="bg-white p-1.5 pb-6 shadow-polaroid">
            <div className="aspect-square overflow-hidden bg-cream-dark">
              <img
                src={accent}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      )}
    </div>

    {/* Product details under the print */}
    <div className="mt-8 flex w-full max-w-sm flex-1 flex-col items-start text-left">
      <h3
        data-test={titleTestId}
        testID={titleTestId}
        className="h3 mb-3 text-[1.85rem] lg:text-[2.1rem]"
      >
        {title}
      </h3>
      <p className="body-copy mb-7 line-clamp-4 flex-1">{description}</p>
      <ProductAvailability
        testId={statusTestId}
        availability={availability}
        plannedLabel={plannedLabel}
      />
    </div>
  </article>
);

const LegacyProductRow = ({
  testId,
  titleTestId,
  statusTestId,
  title,
  description,
  image,
  availability,
  plannedLabel,
}) => (
  <div
    data-test={testId}
    testID={testId}
    className="grid items-center gap-6 rounded-[1.75rem] border border-cocoa/5 bg-cream/70 p-5 shadow-card sm:p-7 lg:grid-cols-2"
  >
    <div className="flex flex-col items-start text-left">
      <h3
        data-test={titleTestId}
        testID={titleTestId}
        className="h3 mb-4 text-[1.85rem] lg:text-[2.15rem]"
      >
        {title}
      </h3>
      <p className="body-copy mb-7 max-w-md">{description}</p>
      <ProductAvailability
        testId={statusTestId}
        availability={availability}
        plannedLabel={plannedLabel}
      />
    </div>
    <div className="polaroid polaroid-tilt-none mx-auto w-full max-w-xs">
      <div className="polaroid-photo aspect-[4/5]">
        <img src={image} alt={title} />
      </div>
    </div>
  </div>
);

const Products = () => {
  const { t } = useTranslation();
  const plannedLabel = t('planned_product_label');

  return (
    <motion.section
      data-test="productPageSection"
      testID="productPageSection"
      initial={fadeUp.initial}
      animate={fadeUp.animate}
      exit={fadeUp.exit}
      transition={transition1}
      className="page-shell"
    >
      <div className="container-editorial">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-14 lg:pt-2">
          <p className="eyebrow mb-4">{t('products_eyebrow')}</p>
          <h1
            data-test="productsPageTitle"
            testID="productsPageTitle"
            className="h1 mb-5 text-[2.85rem] sm:text-[3.5rem] lg:text-[4.5rem]"
          >
            {t('products')}
          </h1>
          <div className="divider-line mb-6" />
          <p className="body-copy mx-auto max-w-lg">{t('shop_description_2')}</p>
        </div>

        <div hidden data-test="bundlesSection" testID="bundlesSection">
          <h2 className="h2 text-center">{t('bundles_title')}</h2>
          <div className="mt-10 space-y-8">
            <LegacyProductRow
              testId="bundleProduct1"
              titleTestId="bundleProductTitle1"
              statusTestId="bundleProductStatus1"
              title={t('bundles_subtitle_1')}
              description={t('bundles_description')}
              image={Bundle1}
              availability={PRODUCT_AVAILABILITY.PLANNED}
              plannedLabel={plannedLabel}
            />
            <LegacyProductRow
              testId="bundleProduct2"
              titleTestId="bundleProductTitle2"
              statusTestId="bundleProductStatus2"
              title={t('bundles_subtitle_2')}
              description={t('bundles_description')}
              image={Bundle2}
              availability={PRODUCT_AVAILABILITY.PLANNED}
              plannedLabel={plannedLabel}
            />
          </div>
        </div>

        <div data-test="guidesSection" testID="guidesSection">
          <div className="mb-10 text-center">
            <p className="eyebrow mb-3">{t('featured_guides')}</p>
            <h2
              data-test="guidesSectionTitle"
              testID="guidesSectionTitle"
              className="h2 mb-0"
            >
              {t('travel_guides_title')}
            </h2>
          </div>

          <div className="polaroid-board">
            <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2 md:gap-10 lg:gap-14">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition1, delay: 0.12 }}
                className="flex justify-center"
              >
                <GuideCard
                  testId="guideProduct1"
                  titleTestId="guideProductTitle1"
                  statusTestId="guideProductStatus1"
                  title={t('travel_guide_1_title')}
                  description={t('travel_guide_1_description')}
                  cover={GuideSintra}
                  accent={GuideSintraAlt}
                  availability={PRODUCT_AVAILABILITY.PLANNED}
                  plannedLabel={plannedLabel}
                  tilt="polaroid-tilt-left"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...transition1, delay: 0.18 }}
                className="flex justify-center"
              >
                <GuideCard
                  testId="guideProduct2"
                  titleTestId="guideProductTitle2"
                  statusTestId="guideProductStatus2"
                  title={t('travel_guide_2_title')}
                  description={t('travel_guide_2_description')}
                  cover={GuideLisbon}
                  accent={GuideLisbonAlt}
                  availability={PRODUCT_AVAILABILITY.PLANNED}
                  plannedLabel={plannedLabel}
                  tilt="polaroid-tilt-right"
                />
              </motion.div>
            </div>
          </div>
        </div>

        <div hidden data-test="presetsSection" testID="presetsSection">
          <h2
            data-test="presetsSectionTitle"
            testID="presetsSectionTitle"
            className="h2 text-center"
          >
            {t('lightroom_presets_title')}
          </h2>
          <div className="mt-10 space-y-8">
            <LegacyProductRow
              testId="presetProduct1"
              titleTestId="presetProductTitle1"
              statusTestId="presetProductStatus1"
              title={t('lightroom_presets_subtitle_1')}
              description={t('lightroom_presets_description')}
              image={Preset1}
              availability={PRODUCT_AVAILABILITY.PLANNED}
              plannedLabel={plannedLabel}
            />
            <LegacyProductRow
              testId="presetProduct2"
              titleTestId="presetProductTitle2"
              statusTestId="presetProductStatus2"
              title={t('lightroom_presets_subtitle_2')}
              description={t('lightroom_presets_description')}
              image={Preset2}
              availability={PRODUCT_AVAILABILITY.PLANNED}
              plannedLabel={plannedLabel}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Products;
