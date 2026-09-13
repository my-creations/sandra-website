import React, { useEffect } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Collaborations from "../pages/Collaborations";
import Products from "../pages/Products";

const BRAND = "Sandra Camilo";

/** Pathname → i18n key for the page segment of document.title */
const TITLE_KEYS = {
  "/": null,
  "/about": "about",
  "/portfolio": "portfolio",
  "/portfolio/collaborations": "collaborations",
  "/shop": "shop",
  "/shop/products": "products",
  "/contact": "contact",
};

function useDocumentTitle() {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const key = TITLE_KEYS[pathname];
    document.title = key ? `${t(key)} · ${BRAND}` : BRAND;
  }, [pathname, t, i18n.language]);
}

const AnimRoutes = () => {
  const location = useLocation();
  useDocumentTitle();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio/collaborations" element={<Collaborations />} />
        <Route path="/shop/products" element={<Products />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
