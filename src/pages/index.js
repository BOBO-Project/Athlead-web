import React, { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.scss";

//Components
import { Navbar, Footer } from "../components";
import FloatingSosmed from "components/floating-sosmed";

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
  { ...blog },
  { ...faq },
];

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const RenderPages = () => {
  return (
    <div>
      <Navbar />
      <div id="all-pages-wrapper">
        <Wrapper>
          <Routes>
            {appPages.map((page, i) => (
              <Route {...page} key={i} />
            ))}
          </Routes>
        </Wrapper>
      </div>
      <Footer />

      <FloatingSosmed />
      <ToastContainer />
    </div>
  );
};

export default RenderPages;
