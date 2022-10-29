import React from "react";
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

//Components
import ProductCard from "./ProductCard";
import PartnerCard from "./PartnerCard";
import BlogCard from "./BlogCard";
import TestimonyCard from "./TestimonyCard";

const Homepage = () => {
  const { translate } = useTranslate(english, indo);

  return (
    <div id="homepage">
      {/* HEADERS */}
      <div className="header">
        <div className="left">
          <p className="h-1"><span>ATHLEAD</span> <span>INDONESIA</span></p>
          <p className="h-2">{translate("h2")}</p>

          <div className="coming-soon-wrapper">
            <div className="coming-soon">
              <span>COMING SOON!</span>
            </div>
          </div>

          <p className="get-notif-t">Get notified when we launched</p>
          <div className="notif-input-wrapper">
            <div className="input-wrapper">
              <input placeholder="Input your phone number / email address here" />
            </div>
            <button>
              <PaperPlane />
              <span>Notify Me</span>
            </button>
          </div>
          <div className="notif-input">
            <input type="checkbox" />
            <p>By clicking “Notify Me”, you agree to the <span>Terms & Condition</span></p>
          </div>

          <div className="explore-more">
            <span>EXPLORE MORE</span>
            <ArrowDown />
          </div>
        </div>

        <div className="right">
          <img src={BasketCourt} alt="" className="basket-court" />
        </div>
      </div>

      {/* LABEL 1 */}
      <div className="label-1">
        <div className="l1-content">
          <div className="left"><p>3 STEPS INTO <span>ATHLEAD</span></p></div>
          <div className="right">
            <div className="rcontent">
              <SearchAlt />
              <p className="title">FIND YOUR NEEDS</p>
              <p className="cntn">Athlead best choices <br />
                of multiple sports are here</p>
            </div>
            <div className="rcontent">
              <Scale />
              <p className="title">BOOK</p>
              <p className="cntn">Confirm your <br />
                prefered sports</p>
            </div>
            <div className="rcontent">
              <ShieldCheck />
              <p className="title">PLAY</p>
              <p className="cntn">Seamless transaction <br />
                until your play day</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Product */}
      <div className="our-product">
        <p className="op-header">OUR PRODUCT -</p>
        <p className="op-sub-header">ATHLEAD integrates and houses all sports activities - from the most famous to the less known ones - <br />
          into one platform which includes supplementary activities for recreational sports needs</p>
        <div className="product-card-wrapper">
          <ProductCard
            src={Venue}
            title="Venue"
            text="Book a venue and play your game"
          />
          <ProductCard
            src={Photo}
            title="Photographer"
            text="Capture and share your moment doing all sports activity"
          />
          <ProductCard
            src={Whistle}
            title="Coach"
            text="Maximize your talent from our best talent"
          />
          <ProductCard
            src={Laptop}
            title="Academy"
            text="Become excellent by joining the academy"
          />
        </div>
      </div>

      {/* Athlead Partner */}
      <div className="partner-wrapper">
        <p className="partner-title">WHY BECOME ATHLEAD PARTNER?</p>
        <p className="partner-subtitle">Whether you are a sports venue, coach, sports academy, or photographer, becoming ATHLEAD <br /> INDONESIA Partner can benefit your service in a number of ways</p>
        <div className="partner-card-wrapper">
          <PartnerCard
            Icon={AddressBook}
            title="Online Booking"
            content={["Calendar Sync", "Seamless Booking Process", "Staff/Workers Effeciency", "Boost Conversion"]}
          />
          <PartnerCard
            Icon={ShoppingBag}
            title="Marketing"
            content={["Search Optimization", "Social Media Ads", "Professional Company Pages"]}
          />
          <PartnerCard
            Icon={Signal}
            title="Increased Utilisation"
            content={["Search Optimization", "Promote/Campaign", "Ease of access"]}
          />
        </div>
        <div className="partner-label">
          <div className="partner-label-wrapper">
            <div className="plwiw">
              <div className="pl-txt">
                <p className="plt-1">INTERESTED TO INCREASE YOUR SPORTS BUSINESS?</p>
                <p className="plt-2">BECOME <span>OUR PARTNER</span> NOW!</p>
              </div>
              <button className="pltb-wrapper">
                <span>See Details</span>
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BLOG */}
      <div className="blog-wrapper">
        <p className="blog-title">BLOG -</p>
        <div className="blog-sh-wrapper">
          <p className="bsh-t1">Checkout our latest articles about sports from Indonesia and Worldwide.</p>
          <p className="bsh-t2">See Details<ArrowRight /></p>
        </div>
        <div className="blog-card-wrapper">
          <BlogCard
            src={BlogImg}
            title="This is a super super long text title of an articles"
            text="This is a lorem ipsum text which I recomended for a description of an article"
          />
          <BlogCard
            src={BlogImg}
            title="This is single text title"
            text="This is a lorem ipsum text which I recomended for a description of an article"
          />
          <BlogCard
            src={BlogImg}
            title="This is double line text of an article title"
            text="This is a lorem ipsum text which I recomended for a description of an article"
          />
          <BlogCard
            src={BlogImg}
            title="This is single text title"
            text="This is a lorem ipsum text which I recomended for a description of an article"
          />
        </div>
      </div>

      {/* TESTIMONY */}
      <div className="testimony-wrapper">
        <p className="testi-title">LET’S HEAR WHAT THEY SAID -</p>
        <p className="testi-subtitle">Checkout what they said about ATHLEAD performance.</p>
        <div className="testi-card-wrapper">
          <TestimonyCard
            src={CeliaAtmojo}
            name="GUNAWAN SETYA LAKSANA"
            info="Runner Up Volley Ball at Asian Games"
            title="Keren Banget! Cuman klik klik langsung bisa booking lapangan."
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining "
          />
          <TestimonyCard
            src={Gunawan}
            name="CECILIA ATMOJO"
            info="Head of West Java Mini Soccer Association"
            title="Booking lapangan mini soccer sambil rebahan!"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining "
          />
        </div>
      </div>

      {/* FORM JOIN */}
      <div className="form-join">
        <div className="fj-wrapper">
          <div className="left">
            <div className="form">
              <p className="form-title">JOIN OUR SUPERTEAM!</p>
              <p className="form-subtitle">Ready for new and challanging stuff? Passionate of things
                about sports? We’re welcoming you to become our Superteam!</p>
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
                    <input placeholder="Biko Maryono" />
                  </div>
                </div>
              </div>

              <div className="form-fields">
                <div className="field-wrapper">
                  <p className="input-label">Email</p>
                  <div className="input-wrapper">
                    <input placeholder="Content Writers" />
                  </div>
                </div>
                <div className="field-wrapper">
                  <p className="input-label">Phone Number</p>
                  <div className="input-wrapper">
                    <input placeholder="Content Writers" />
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
    </div>
  );
};

export default Homepage;
