import React from "react";
import { Routes, Route } from "react-router-dom";
import useTranslate from "../hooks/useTranslate";

import homepage from "./homepage";
import product from "./product";

const appPages = [{ ...homepage }, { ...product }];

const RenderPages = () => {
  const { changeLanguage, language } = useTranslate();
  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <div>TEST LANGUAGE - {language}</div>
        <button onClick={changeLanguage}>change</button>
      </div>
      <Routes>
        {appPages.map((page, i) => (
          <Route {...page} key={i} />
        ))}
      </Routes>
    </>
  );
};

export default RenderPages;
