import React from 'react';
import ChangeLanguage from './ChangeLanguage';
import Socials from './Socials';
import MobileNav from './MobileNav';
import Logo from '../img/header/logorb.png';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const links = [
    { to: '/', label: t('home'), test: 'nav-link-home' },
    { to: '/about', label: t('about'), test: 'nav-link-about' },
    { to: '/portfolio', label: t('portfolio'), test: 'nav-link-portfolio' },
    { to: '/shop', label: t('shop'), test: 'nav-link-shop' },
    { to: '/contact', label: t('contact'), test: 'nav-link-contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-cocoa/5 bg-cream-soft/85 backdrop-blur-md">
      <div className="container-editorial flex h-[5.5rem] items-center justify-between lg:h-[6.5rem]">
        <Link to="/" className="group flex items-center gap-3">
          <img
            src={Logo}
            alt="Sandra Camilo"
            className="h-11 w-11 object-contain transition duration-300 group-hover:scale-105 lg:h-12 lg:w-12"
          />
          <span className="hidden font-primary text-xl tracking-wide text-cocoa-dark sm:block">
            {t('sandra')} {t('camilo')}
          </span>
        </Link>

        <nav className="hidden items-center gap-x-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-test={link.test}
              className={`nav-link ${
                isActive(link.to) ? 'text-cocoa-dark after:w-full' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <ChangeLanguage />
          <Socials />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
