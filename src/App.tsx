// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { About, Footer, Header, Home, Services } from "./pages";
import { AppRoute } from "./route/AppRoute";
// In your main `index.js` or `App.js` file:
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <Router>
      <div className="layout">
        <Header />
        <main className="main-content bg-whitely-50">
          <AppRoute />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
