import React from "react";
import "./style-career.scss";
import useTranslate from "../../hooks/useTranslate";

import english from "./locales/en-US.json";
import indo from "./locales/id.json";

import { ReactComponent as PaperPlane } from "assets/svg/paper-plane.svg";
import RunTrack from "assets/img/run-track.png";


const Career = () => {
  const { translate } = useTranslate(english, indo);
  const isResponsive = window.innerWidth <= 768;
  return (
    <div id="career">
      <div
        className="banner"
        style={{
          backgroundImage: `url(${require("../../assets/career-banner.png")})`,
        }}
      >
        <div className="container-banner">
          <div>
            <h1 className="title-container">{translate("title")}</h1>
            <h3 className="title-description">{translate("description")}</h3>
          </div>
        </div>
      </div>
      {!isResponsive ? (
        <div className="form-join">
          <div className="fj-wrapper">
            <div className="left">
              <div className="form">
                <p className="form-title">JOIN OUR SUPERTEAM!</p>
                <p className="form-subtitle">
                  Ready for new and challanging stuff? Passionate of things
                  about sports? We’re welcoming you to become our Superteam!
                </p>
                <div className="form-fields">
                  <div className="field-wrapper">
                    <p className="input-label">Full Name</p>
                    <div className="input-wrapper">
                      <input placeholder="Biko Maryono" />
                    </div>
                  </div>
                  <div className="field-wrapper">
                    <p className="input-label">Job Position</p>
                    <div className="input-wrapper">
                      <input placeholder="Content Writers" />
                    </div>
                  </div>
                </div>

                <div className="form-fields">
                  <div className="field-wrapper">
                    <p className="input-label">Email</p>
                    <div className="input-wrapper">
                      <input placeholder="Biko.Maryono@gmail.com" />
                    </div>
                  </div>
                  <div className="field-wrapper">
                    <p className="input-label">Phone Number</p>
                    <div className="input-wrapper">
                      <input placeholder="+62-811-900573" />
                    </div>
                  </div>
                </div>

                <div className="join-com-soon">
                  <button>
                    <PaperPlane className="plane-icn" />
                    <span>COMING SOON</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="right">
              <img className="join-image" src={RunTrack} alt="..." />
            </div>
          </div>
        </div>
      ) : (
        <div className="form-join" style={{
          backgroundImage:`url(${require("../../assets/img/volley.png")})`,
          backgroundRepeat:'no-repeat'
        }}>
          {/* <img className="form-join-rsponsive" src={Volley} alt="..." /> */}
          <div className="join-outer">
            <div className="join-inner">
              <p className="jim-1">JOIN OUR SUPERTEAM! </p>
              <p className="jim-2">
                Ready for new and challanging stuff? Passionate of things about
                sports? We’re welcoming you to become our Superteam!
              </p>
              <div className="fj-btn-wrapper">
                <button>
                  <PaperPlane className="plane-icn" />
                  <span>COMING SOON</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;

