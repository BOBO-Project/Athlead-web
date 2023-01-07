import React from "react";
import banner from "assets/img/blog-banner.png";
import useTranslate from "hooks/useTranslate";
import english from "./locales/en-US.json";
import indo from "./locales/id.json";
import { Typography } from "@mui/material";
import "./style-blog.scss";
import comingsoonPic from "assets/img/coming-soon1.png";
import picMobile from "assets/img/comingsoon-mobile.png";
import BreadcrumbsComp from "components/breadcrumbs-comp/breadcrumbs";

export default function Blog() {
  const { translate } = useTranslate(english, indo);
  const isResponsive = window.innerWidth <= 768;

  return (
    <div id="blogPage">
      <div
        style={{
          backgroundImage: `url('${banner}')`,
        }}
        className="banner"
      >
        {/* <div>
          <BreadcrumbsComp page="Blog" />
        </div> */}
        <div className="container-banner">
          <div className="container-content">
            <Typography variant="h1" className="title-container">
              {translate("title")}
            </Typography>
            <Typography variant="h3" className="title-description">
              {translate("description")}
            </Typography>
          </div>
        </div>
      </div>
      <div>
        <div className="container-image">
          <p>
            {isResponsive ? (
              <img src={comingsoonPic} className="image-comingsoon-mobile" />
            ) : (
              <img src={comingsoonPic} className="image-comingsoon" />
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
