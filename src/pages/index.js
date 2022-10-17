import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.scss";

//Components
import { Navbar, Footer } from "../components";

//Pages
import homepage from "./homepage";
import product from "./product";
import aboutus from "./aboutus";

const appPages = [{ ...homepage }, { ...product }, { ...aboutus }];

const RenderPages = () => {
  return (
    <div>
      <Navbar />

      <div id="all-pages-wrapper">
        <Routes>
          {appPages.map((page, i) => (
            <Route {...page} key={i} />
          ))}
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default RenderPages;
