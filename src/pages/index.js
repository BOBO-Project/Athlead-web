import React from "react";
import { Routes, Route } from "react-router-dom";
import useTranslate from "../hooks/useTranslate";

//Components
import { Navbar } from "../components";

//Pages
import homepage from "./homepage";
import product from "./product";

const appPages = [{ ...homepage }, { ...product }];

const RenderPages = () => {
  const { changeLanguage, language } = useTranslate();
  return (
    <div style={{ width: "100vw" }}>
      <Navbar />
      <Routes>
        {appPages.map((page, i) => (
          <Route {...page} key={i} />
        ))}
      </Routes>
    </div>
  );
};

export default RenderPages;
