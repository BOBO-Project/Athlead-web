import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.scss";

//Components
import { Navbar, Footer } from "../components";

//Pages
import homepage from "./homepage";
import product from "./product";
import career from "./career";
import aboutus from "./aboutus";
import partnerwithus from "./partnerwithus";
import privacypolicy from "./privacypolicy";
import blog from "./blog";

import faq from "./faq";

const appPages = [
  { ...homepage },
  { ...product },
  { ...aboutus },
  { ...career },
  { ...partnerwithus },
  { ...privacypolicy },
  {...blog},
  { ...faq },
];

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
