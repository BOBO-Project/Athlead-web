import React from "react";
import "./style.scss";

//Assets - svg
import AthleadIcon from "assets/img/athlead-white.png";
import { ReactComponent as FB } from "assets/svg/facebook.svg";
import { ReactComponent as IG } from "assets/svg/instagram.svg";
import { ReactComponent as WA } from "assets/svg/whatsapp.svg";
import { ReactComponent as Twitter } from "assets/svg/twitter.svg";

//Hooks
import useTranslate from "hooks/useTranslate";
import english from "./locales/en-US.json";
import indo from "./locales/id.json";
import { Link } from "react-router-dom";

function Footer() {
  const { translate } = useTranslate(english, indo);

  return (
    <div id="footer">
      <div className="footer-wrapper">
        <div className="first">
          <img src={AthleadIcon} alt="..." className="athld-icn" />
          <p className="athld-t">{translate("description")}</p>
          <div className="sosmed">
            <a
              href="https://www.facebook.com/Athlead-Indonesia-102701862716968"
              target="_blank"
            >
              <FB />
            </a>
            <a href="https://www.instagram.com/athlead.id/" target="_blank">
              <IG />
            </a>
            <a href="https://twitter.com/athlead_id" target="_blank">
              <Twitter />
            </a>
            <a
              href="whatsapp://send?text=Hello Athlead!&phone=+6285173394930"
              target="_blank"
            >
              <WA />
            </a>
          </div>
        </div>

        <div className="second">
          <p className="title">{translate("about-title")}</p>
          <Link to="/" style={{ textDecoration: "none", marginBottom: "16px" }}>
            <p className="sub-title">{translate("about-content-home")}</p>
          </Link>
          <Link
            to="/about-us"
            style={{ textDecoration: "none", marginBottom: "16px" }}
          >
            <p className="sub-title">{translate("about-content-about")}</p>
          </Link>
          <Link
            to="/career"
            style={{ textDecoration: "none", marginBottom: "16px" }}
          >
            <p className="sub-title">{translate("about-content-career")}</p>
          </Link>
          <Link
            to="/blog"
            style={{ textDecoration: "none", marginBottom: "16px" }}
          >
            <p className="sub-title">{translate("about-content-blog")}</p>
          </Link>
          <Link
            to="/partner"
            style={{ textDecoration: "none", marginBottom: "16px" }}
          >
            <p className="sub-title">{translate("about-content-partner")}</p>
          </Link>
        </div>
        <div className="third">
          <Link to="/product">
            <p className="title">{translate("product-title")}</p>
            <p className="sub-title">{translate("product-content-venue")}</p>
          </Link>
          <Link to="/product">
            <p className="sub-title">{translate("product-content-coach")}</p>
          </Link>
          <Link to="/product">
            <p className="sub-title">
              {translate("product-content-photographer")}
            </p>
          </Link>
          <Link to="/product">
            <p className="sub-title">{translate("product-content-academy")}</p>
          </Link>
        </div>
        <div className="forth">
          <p className="title">{translate("other-title")}</p>
          <Link
            to="/faq"
            style={{ textDecoration: "none", marginBottom: "16px" }}
          >
            <p className="sub-title">{translate("other-content-faq")}</p>
          </Link>
          <Link
            to="/privacypolicy"
            style={{ textDecoration: "none", marginBottom: "16px" }}
          >
            <p className="sub-title">{translate("other-content-policy")}</p>
          </Link>
          <p
            className="sub-title"
            style={{
              marginTop: "16px",
            }}
          >
            <a
              href="whatsapp://send?text=Hello Athlead!&phone=+6285173394930"
              style={{
                color: "white",
              }}
            >
              {translate("other-content-chat")}
            </a>
          </p>
        </div>
        <div className="fifth">
          <p className="title">{translate("contact-title")}</p>
          <p className="sub-title">{translate("contact-content-address")}</p>
          <p className="content">
            Jl. KH. Ahmad Dahlan Kby. No.7, <br />
            RW.1, Kramat Pela, Kec. Kby. Baru, <br />
            Kota Jakarta Selatan, Daerah <br />
            Khusus Ibukota Jakarta 12130
          </p>
          <p className="sub-title">{translate("contact-content-phone")}</p>
          <p className="content">{"(+62) 851-7339-4930"}</p>
          <p className="sub-title">{translate("contact-content-email")}</p>
          <a
            href="mailto:hello@athlead.id?subject=Feedback&body=Message"
            target="_blank"
          >
            <p className="content">hello@athlead.id</p>
          </a>
        </div>
      </div>
      <div className="created">
        <p>
          PT Kita Athlead Indonesia <span>&#169;</span> All Right Reserved 2022
        </p>
      </div>
    </div>
  );
}

export default Footer;
