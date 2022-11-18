import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RenderPages from "./pages";
import "./style.scss";
import { Provider } from "react-redux";

import "./i18n";
import store from "stores";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RenderPages />
    </BrowserRouter>
  </React.StrictMode>
);
