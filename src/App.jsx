import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import Analytics from "./components/Analytics";
import AnimRoutes from "./components/AnimRoutes";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-cream-soft bg-cream-radial text-primary">
      <Router>
        <Analytics />
        <Header />
        <main className="flex-1">
          <AnimRoutes />
        </main>
        <Footer />
        <CookieConsent />
      </Router>
    </div>
  );
};

export default App;
