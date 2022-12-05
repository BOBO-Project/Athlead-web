import { useState } from "react";
import Modal from '@mui/material/Modal';
import axios from "axios";
import "./style-homepage.scss";

import useTranslate from "hooks/useTranslate";
import english from "./locales/en-US.json";
import indo from "./locales/id.json";

//Assets- svg
import { ReactComponent as PaperPlane } from "assets/svg/paper-plane.svg";
import { ReactComponent as ArrowDown } from "assets/svg/arrow-down.svg";
import { ReactComponent as SearchAlt } from "assets/svg/search-alt.svg";
import { ReactComponent as Scale } from "assets/svg/scale.svg";
import { ReactComponent as ShieldCheck } from "assets/svg/shield-check.svg";
import { ReactComponent as AddressBook } from "assets/svg/address-book.svg";
import { ReactComponent as ShoppingBag } from "assets/svg/shopping-bag.svg";
import { ReactComponent as Signal } from "assets/svg/signal.svg";
import { ReactComponent as ArrowRight } from "assets/svg/arrow-right.svg";

//Assets- png
import BasketCourt from "assets/img/basketcourt.png";
import Venue from "assets/img/venue.png";
import Photo from "assets/img/photo.png";
import Whistle from "assets/img/whistle.png";
import Laptop from "assets/img/laptop.png";
import BlogImg from "assets/img/blog-img.png";
import CeliaAtmojo from "assets/img/celia-atmojo.png";
import Gunawan from "assets/img/gunawan.png";
import RunTrack from "assets/img/run-track.png";
import Volley from "assets/img/volley.png";
import CloseIcon from "assets/img/close-icon.png";

//Components
import ProductCard from "./ProductCard";
import PartnerCard from "./PartnerCard";
import BlogCard from "./BlogCard";
import TestimonyCard from "./TestimonyCard";

const Homepage = () => {
  const { translate } = useTranslate(english, indo);
  const [openTnc, setOpenTnc] = useState(false);

  const [email, setEmail] = useState("")

  const [isResponsive] = useState(window.innerWidth <= 1021);

  const handleSendEmail = async () => {
    try {
      await axios.post("http://localhost:3000/email", { email })
    } catch (error) {
      console.log(error)
    } finally {
      setEmail("")
    }
  }
  return (
    <div id="homepage">
      {/* HEADERS */}
      <div className="header">
        <div className="left">
          <p className="h-1"><span>ATHLEAD</span> <span>INDONESIA</span></p>
          <p className="h-2">{translate("1")}</p>

          <div className="coming-soon-wrapper">
            <div className="coming-soon">
              <span>{translate("2")}</span>
            </div>
          </div>

          <p className="get-notif-t">{translate("3")}</p>
          <div className="notif-input-wrapper">
            <div className="input-wrapper">
              <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder={!isResponsive ? translate("n4") : translate("mn4")} />
            </div>
            {isResponsive ? (
              <div className="notif-input">
                <input type="checkbox" />
                <p>{translate('4')}<span>{translate("5")}</span></p>
              </div>
            ) : null}
            <button onClick={handleSendEmail}>
              <PaperPlane />
              <span>{translate("6")}</span>
            </button>
          </div>
          {!isResponsive ? <div className="notif-input">
            <input type="checkbox" />
            <p>{translate('4')}<span onClick={() => setOpenTnc(true)}>{translate("5")}</span></p>
          </div> : null}

          <div className="explore-more">
            <span>{translate("7")}</span>
            <ArrowDown />
          </div>

          <Modal
            open={openTnc}
            onClose={null}
            id="tnc-modal"
          >
            <div className="tnc-modal-wrapper">
              <div className="tnc-modal-header">
                <p>{translate("8")}</p>
                <img onClick={() => setOpenTnc(false)} className="close-modal-icon" src={CloseIcon} alt="..." />
              </div>
              <div className="tnc-modal-body">
                <p>{translate("9")}</p>
              </div>
            </div>
          </Modal>
        </div>

        <div className="right">
          <img src={BasketCourt} alt="" className="basket-court" />
        </div>
      </div>

      {/* LABEL 1 */}
      <div className="label-1">
        <div className="l1-content">
          <div className="left"><p>{translate("10")}<span>ATHLEAD</span></p></div>
          <div className="right">
            <div className="rcontent">
              <SearchAlt />
              <p className="title">{translate("11")}</p>
              <p className="cntn">{translate("12")}<br />
                {translate("13")}</p>
            </div>
            <div className="rcontent">
              <Scale />
              <p className="title">{translate("14")}</p>
              <p className="cntn">{translate("15")} <br />{translate("16")}</p>
            </div>
            <div className="rcontent">
              <ShieldCheck />
              <p className="title">{translate("17")}</p>
              <p className="cntn">{translate("18")}<br />
                {translate("19")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Product */}
      <div className="our-product">
        <p className="op-header">{translate("20")}</p>
        <p className="op-sub-header">{translate("21")}<br />
          {translate("22")}</p>
        {!isResponsive ? (
          <div className="product-card-wrapper">
            <ProductCard
              src={Venue}
              title={translate("23")}
              text={translate("24")}
              translate={translate}
            />
            <ProductCard
              src={Photo}
              title={translate("25")}
              text={translate("26")}
              translate={translate}
            />
            <ProductCard
              src={Whistle}
              title={translate("27")}
              text={translate("28")}
              translate={translate}
            />
            <ProductCard
              src={Laptop}
              title={translate("29")}
              text={translate("30")}
              translate={translate}
            />
          </div>
        ) : (
          <div className="pcw-scroll">
            <div className="product-card-wrapper">
              <ProductCard
                src={Venue}
                title={translate("23")}
                text={translate("24")}
                translate={translate}
              />
              <ProductCard
                src={Photo}
                title={translate("25")}
                text={translate("26")}
                translate={translate}
              />
              <ProductCard
                src={Whistle}
                title={translate("27")}
                text={translate("28")}
                translate={translate}
              />
              <ProductCard
                src={Laptop}
                title={translate("29")}
                text={translate("30")}
                translate={translate}
              />
            </div>
          </div>
        )}
      </div>

      {/* Athlead Partner */}
      <div className="partner-wrapper">
        <p className="partner-title">{translate("31")}</p>
        <p className="partner-subtitle">{translate("32")}<br />{translate("33")}</p>
        <div className="partner-card-wrapper">
          <PartnerCard
            Icon={AddressBook}
            title={translate("34")}
            desc={translate("35")}
            points={[translate("36"), translate("37"), translate("38")]}
            content={[translate("39"), translate("40"), translate("41"), translate("42")]}
          />
          <PartnerCard
            Icon={ShoppingBag}
            title={translate("43")}
            desc={translate("44")}
            points={[
              translate("45"),
              translate("46"),
              translate("47")
            ]}
            content={[translate("48"), translate("49"), translate("50")]}
          />
          <PartnerCard
            Icon={Signal}
            desc={translate("51")}
            points={[
              translate("52"),
              translate("53"),
              translate("54")
            ]}
            title={translate("55")}
            content={[translate("56"), translate("57"), translate("58")]}
          />
        </div>
        <div className="partner-label">
          <div className="partner-label-wrapper">
            <div className="plwiw">
              <div className="pl-txt">
                <p className="plt-1">{translate("59")}</p>
                <p className="plt-2">{translate("60")}<span>{translate("61")}</span> {translate("62")}</p>
              </div>
              <button className="pltb-wrapper">
                <span>{translate("63")}</span>
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BLOG */}
      <div className="blog-wrapper">
        {!isResponsive ? (
          <>
            <p className="blog-title">{translate("64")}</p>
            <div className="blog-sh-wrapper">
              <p className="bsh-t1">{translate("65")}</p>
              <p className="bsh-t2">{translate("63")}<ArrowRight /></p>
            </div>
          </>
        ) : (
          <>
            <div className="blog-sh-wrapper">
              <p className="blog-title">{translate("64")}</p>
              <p className="bsh-t2">{translate("63")}<ArrowRight /></p>
            </div>
            <p className="bsh-t1">{translate("65")}</p>
          </>
        )}
        {!isResponsive ? (
          <div className="blog-card-wrapper">
            <BlogCard
              src={BlogImg}
              title={translate("66")}
              text={translate("67")}
            />
            <BlogCard
              src={BlogImg}
              title={translate("68")}
              text={translate("69")}
            />
            <BlogCard
              src={BlogImg}
              title={translate("70")}
              text={translate("71")}
            />
            <BlogCard
              src={BlogImg}
              title={translate("72")}
              text={translate("73")}
            />
          </div>
        ) : (
          <div className="blog-cw-scroll">
            <div className="blog-card-wrapper">
              <BlogCard
                src={BlogImg}
                title={translate("66")}
                text={translate("67")}
              />
              <BlogCard
                src={BlogImg}
                title={translate("68")}
                text={translate("69")}
              />
              <BlogCard
                src={BlogImg}
                title={translate("70")}
                text={translate("71")}
              />
              <BlogCard
                src={BlogImg}
                title={translate("72")}
                text={translate("73")}
              />
            </div>
          </div>
        )}
      </div>

      {/* TESTIMONY */}
      <div className="testimony-wrapper">
        <p className="testi-title">{translate("74")}</p>
        <p className="testi-subtitle">{translate("75")}</p>
        {!isResponsive ? (
          <div className="testi-card-wrapper">
            <TestimonyCard
              src={CeliaAtmojo}
              name="GUNAWAN SETYA LAKSANA"
              info={translate("76")}
              title={translate("77")}
              text={translate("78")}
            />
            <TestimonyCard
              src={Gunawan}
              name="CECILIA ATMOJO"
              info={translate("79")}
              title={translate("80")}
              text={translate("81")}
            />
          </div>
        ) : (
          <div className="testi-card-scroll">
            <div className="testi-card-wrapper">
              <TestimonyCard
                src={CeliaAtmojo}
                name="GUNAWAN SETYA LAKSANA"
                info={translate("76")}
                title={translate("77")}
                text={translate("78")}
              />
              <TestimonyCard
                src={Gunawan}
                name="CECILIA ATMOJO"
                info={translate("79")}
                title={translate("80")}
                text={translate("81")}
              />
            </div>
          </div>
        )}

      </div>

      {/* FORM JOIN */}
      {!isResponsive ? (
        <div className="form-join">
          <div className="fj-wrapper">
            <div className="left">
              <div className="form">
                <p className="form-title">{translate("82")}</p>
                <p className="form-subtitle">{translate("83")}</p>
                <div className="form-fields">
                  <div className="field-wrapper">
                    <p className="input-label">{translate("84")}</p>
                    <div className="input-wrapper">
                      <input placeholder="Biko Maryono" />
                    </div>
                  </div>
                  <div className="field-wrapper">
                    <p className="input-label">{translate("85")}</p>
                    <div className="input-wrapper">
                      <input placeholder="Biko Maryono" />
                    </div>
                  </div>
                </div>

                <div className="form-fields">
                  <div className="field-wrapper">
                    <p className="input-label">{translate("86")}</p>
                    <div className="input-wrapper">
                      <input placeholder="Content Writers" />
                    </div>
                  </div>
                  <div className="field-wrapper">
                    <p className="input-label">{translate("87")}</p>
                    <div className="input-wrapper">
                      <input placeholder="Content Writers" />
                    </div>
                  </div>
                </div>

                <div className="join-com-soon">
                  <button>
                    <PaperPlane className="plane-icn" />
                    <span></span>
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
        <div className="form-join">
          <img className="form-join-rsponsive" src={Volley} alt="..." />
          <div className="join-outer">
            <div className="join-inner">
              <p className="jim-1">{translate("82")}</p>
              <p className="jim-2">{translate("83")}</p>
              <div className="fj-btn-wrapper">
                <button>
                  <PaperPlane className="plane-icn" />
                  <span>{translate("88")}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
