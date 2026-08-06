import React, { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ChangeLanguage from './ChangeLanguage';

const MobileNav = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

  const links = [
    { to: '/', label: t('home') },
    { to: '/about', label: t('about') },
    { to: '/portfolio', label: t('portfolio') },
    { to: '/shop', label: t('shop') },
    { to: '/contact', label: t('contact') },
  ];

  useEffect(() => {
    setOpenMenu(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = openMenu ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [openMenu]);

  return (
    <nav className="flex lg:hidden">
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setOpenMenu(true)}
        className="text-3xl text-cocoa transition hover:text-blush-deep"
      >
        <CgMenuRight />
      </button>

      <AnimatePresence>
        {openMenu && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-cocoa-dark/25 backdrop-blur-[2px]"
              onClick={() => setOpenMenu(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.45 }}
              className="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col bg-cream px-8 py-10 shadow-soft"
            >
              <div className="mb-12 flex items-center justify-between">
                <span className="font-primary text-2xl text-cocoa-dark">
                  {t('sandra')} {t('camilo')}
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpenMenu(false)}
                  className="text-3xl text-cocoa transition hover:text-blush-deep"
                >
                  <IoMdClose />
                </button>
              </div>

              <ul className="flex flex-1 flex-col gap-y-7">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      onClick={() => setOpenMenu(false)}
                      className="font-primary text-3xl text-cocoa-dark transition hover:text-blush-deep"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="border-t border-cocoa/10 pt-6">
                <ChangeLanguage visible />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
