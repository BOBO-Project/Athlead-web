import React from "react";
import "./style-aboutus.scss";
import useTranslate from "../../hooks/useTranslate";

import english from "./locales/en-US.json";
import indo from "./locales/id.json";

const Aboutus = () => {
  const { translate } = useTranslate(english, indo);

  return (
    <div id="aboutus">
      <div
        className="banner"
        style={{
          backgroundImage: `url(${require("../../assets/aboutus-banner.png")})`,
        }}
      >
        <div className="container-banner">
          <div>
            <h1 className="title-container">{translate("title")}</h1>
            <h3 className="title-description">{translate("description")}</h3>
          </div>
        </div>
      </div>
      <div className="container-content">
        <div className="container-box">
          <p className="container-content-opening">
            <p className="container-content-wording">
              {translate("openingword")}
            </p>{" "}
            {/* <br /> */}
            {translate("paragraph1")}
            {/* <br /> recreational sports. <br /> */}
            <br />
            <br />
            {translate("paragraph2")} <br />
            <br />
            {translate("paragraph3")}
            <br />
            <br />
            {translate("paragraph4")} <br />
            <br /> {translate("paragraph5")}
          </p>
        </div>
        <div
          className="image-box"
          style={{
            backgroundImage: `url(${require("../../assets/circle-1.png")})`,
          }}
        >
          <div className="image-box-1">
            <div>
              <img
                className="image-box-1-dot"
                alt="circle-dot"
                src={require("../../assets/circle-dot.png")}
              />
            </div>
            <div>
              <img
                className="about-us-image-1"
                src={require("../../assets/about-us-image-1.png")}
                alt="athlead-about-us"
              />
            </div>
            <div>
              <img
                className="about-us-image-2"
                src={require("../../assets/about-us-image-4.png")}
                alt="athlead-about-us"
              />
            </div>
          </div>
          <div className="image-box-2">
            <div>
              <img
                className="about-us-image-3"
                src={require("../../assets/about-us-image-2.png")}
              />
            </div>
            <div>
              <img
                className="about-us-image-4"
                src={require("../../assets/about-us-image-3.png")}
              />
            </div>
            <div>
              <img
                className="image-box-2-dot"
                alt="circle-dot"
                src={require("../../assets/circle-dot-2.png")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
