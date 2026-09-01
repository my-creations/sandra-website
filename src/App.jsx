import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";

const App = () => {
  return (
    <div className="min-h-screen bg-cream-soft bg-cream-radial text-primary">
      <Router>
        <Header />
        <main>
          <AnimRoutes />
        </main>
      </Router>
    </div>
  );
};

export default App;
