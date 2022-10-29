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
            <br />
            <br />
            ATHLEAD INDONESIA is a digital platform specializing in
            <br /> recreational sports. <br />
            <br />
            Our Mission is to provide an integrated multi-services sports
            solution in the form of a website and mobile app for sports venue
            booking, coaching services, photographer services, and many more.{" "}
            <br />
            <br />
            We know the work-life balance isn’t always easy to deal with, and
            our service takes the hassle away from finding your sports needs.
            <br />
            <br />
            ATHLEAD will try to help you with all the information and access to
            some recreational sports venues/facilities and any other services.
            Recreational sport is a concrete role in bringing people together,
            sharing moments, and enhancing well-being. <br />
            <br /> Wouldn’t be great to have a one-stop solution for all your
            recreational sports needs?
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
