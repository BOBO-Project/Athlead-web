import React from "react";
import "./style-faq.scss";
import useTranslate from "../../hooks/useTranslate";

// Translate
import english from "./locales/en-US.json";
import indo from "./locales/id.json";

// React Component
import { ReactComponent as FB } from "assets/svg/facebook-bg.svg";
import { ReactComponent as IG } from "assets/svg/instagram-bg.svg";
import { ReactComponent as WA } from "assets/svg/whatsapp-bg.svg";
import { ReactComponent as Twitter } from "assets/svg/twitter-bg.svg";
import { ReactComponent as Copy } from "assets/svg/copy-button.svg";

// Component
import FaqAccordion from "./FaqAccordion";

const Faq = () => {
  const { translate } = useTranslate(english, indo);
  const isResponsive = window.innerWidth <= 768;

  return (
    <div id="faq">
      <div className="container-faq">
        <div className="container-text-wrapper">
          <h1 className="ctw-title">{translate("header")}</h1>
          <h3 className="ctw-description">{translate("description")}</h3>
        </div>
        <div className="accordion-faq-wrapper">
          {translate("FAQ").map(({ title, content }) => (
            <FaqAccordion title={title} content={content} />
          ))}
        </div>
        <div className="label-1">
          <div className="l1-content">
            <div className="left">
              <p>Still have a question?</p>{" "}
              {isResponsive ? (
                <h3>
                  We will gladly help you.
                  <br /> Contact us now!
                </h3>
              ) : (
                <h3>We will gladly help you. Contact us now!</h3>
              )}
            </div>
            <div className="center">
              <p>Social Media</p>
              <div className="sosmed">
                <FB />
                <IG />
                <Twitter />
                <WA />
              </div>
            </div>
            <div className="right">
              <div className="field-wrapper">
                <p className="input-label">Email</p>
                <div className="input-wrapper">
                  <input placeholder="Hello@athlead.id" />
                  <Copy />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
