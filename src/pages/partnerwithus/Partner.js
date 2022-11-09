import React, { useState } from "react";
import "./style-partnerpage.scss";

/// Icon
import { ReactComponent as AddressBook } from "assets/svg/address-book.svg";
import { ReactComponent as ShoppingBag } from "assets/svg/shopping-bag.svg";
import { ReactComponent as Signal } from "assets/svg/signal.svg";
import { ReactComponent as ArrowRight } from "assets/svg/arrow-right.svg";

////Assets Product Card
import Venue from "assets/img/venue.png";
import Photo from "assets/img/photo.png";
import Whistle from "assets/img/whistle.png";
import Laptop from "assets/img/laptop.png";

///Assets banner
import banner from "assets/img/pws-banner.png";
import { Container } from "@mui/system";
import {
  Typography,
  Button,
  Modal,
  Box,
  IconButton,
  Avatar,
} from "@mui/material";

///
import useTranslate from "../../hooks/useTranslate";
import english from "./locales/en-US.json";
import indo from "./locales/id.json";
import ProductCard from "./ProductCard";
import PartnerCard from "./PartnerCard";
import Form from "components/formPartner/Form";
import { Close } from "@mui/icons-material";

const Partner = () => {
  const { translate } = useTranslate(english, indo);
  const [isModal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const isReponsive = window.innerWidth <= 800;

  const handleOnClick = (e) => {
    setTitle(e);
    setModal(true);
    // console.log(title);
  };

  const handleClose = () => {
    setModal(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflow: "scroll",
    height: "800px",
  };

  return (
    <div id="partnerPage">
      <div
        style={{
          backgroundImage: `url('${banner}')`,
        }}
        className="banner"
      >
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
      <Modal open={isModal}>
        <div>
          <Box sx={style}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h1>{title} Registration</h1>
              <IconButton
                className="close-button"
                sx={{
                  backgroundColor: "black",
                  height: "40px",
                  width: "40px",
                  color: "white",
                  ml: 1,
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "grey",
                  },
                }}
                onClick={handleClose}
              >
                <Close />
              </IconButton>
            </div>
            <Form title={title} type={title} />
          </Box>
        </div>
      </Modal>
      <div className="container-openingWord">
        <div className="container-openingWord">
          <Typography variant="h1" className="openingWord">
            {translate("openingword")}
          </Typography>
        </div>
      </div>
      {!isReponsive ? (
        <div
          className="product-card-wrapper"
          style={{
            marginTop: "100px",
          }}
        >
          <ProductCard src={Venue} title="Venue">
            <div className="text-product">
              <Typography
                variant="p"
                style={{
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "140%",
                }}
              >
                We will facilitate recreational sports players to find and book
                sports venues and facilities through the ATHLEAD INDONESIA
                website. We will make booking sports venues or facilities easier
                by using the ATHLEAD INDONESIA website service
                <br />
                <br />
                Recreational sports players and activists will find it easier to
                book sports venues or facilities by using the ATHLEAD INDONESIA
                website service.
              </Typography>
            </div>
            <div className="button-container">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "white",
                  color: "#7D0E23",
                  width: "250px",
                  height: "56px",
                }}
                endIcon={<ArrowRight />}
                onClick={() => {
                  handleOnClick("Vendor");
                }}
              >
                <span className="button-text">Join as a Venue</span>
              </Button>
            </div>
          </ProductCard>
          <ProductCard src={Photo} title="Photographer">
            <div className="text-product">
              <Typography
                variant="p"
                style={{
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "140%",
                }}
              >
                ATHLEAD INDONESIA will assist you with a photographer service
                booking feature to capture and share your moment doing all kinds
                of sports activities. We will collaborate with professional
                photographers with a great sports photography portfolio.
                <br />
                <br />
                With these services, ATHLEAD INDONESIA will help recreational
                sports players and activists try a new sport or increase their
                ability in a sport by using the services of a professional
                coach.
              </Typography>
            </div>
            <div className="button-container">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "white",
                  color: "#7D0E23",
                  width: "280px",
                  height: "56px",
                }}
                endIcon={<ArrowRight />}
                onClick={() => {
                  handleOnClick("Photographer");
                }}
              >
                <span className="button-text">Join as a Photographer</span>
              </Button>
            </div>
          </ProductCard>
          <ProductCard src={Whistle} title="Coach">
            <div className="text-product">
              <Typography
                variant="p"
                style={{
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "140%",
                }}
              >
                ATHLEAD INDONESIA will facilitate recreational sports players
                and activists to find and book sports venues and facilities
                through the ATHLEAD INDONESIA website.
                <br />
                <br />
                With these services, ATHLEAD INDONESIA will help recreational
                sports players try a new sport or increase their ability in a
                sport by using the services of a professional coach.
              </Typography>
            </div>
            <div className="button-container">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "white",
                  color: "#7D0E23",
                  width: "250px",
                  height: "56px",
                }}
                endIcon={<ArrowRight />}
                onClick={() => {
                  handleOnClick("Coach");
                }}
              >
                <span className="button-text">Join as a Coach</span>
              </Button>
            </div>
          </ProductCard>
          <ProductCard src={Laptop} title="Academy">
            <div className="text-product">
              <Typography
                variant="p"
                style={{
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "140%",
                }}
              >
                ATHLEAD INDONESIA will facilitate recreational sports players
                and activists to find and book sports venues and facilities
                through the ATHLEAD INDONESIA website.
                <br />
                <br />
                With these services, ATHLEAD INDONESIA will help recreational
                sports players seek and join sports academies.
              </Typography>
            </div>
            <div className="button-container">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "white",
                  color: "#7D0E23",
                  width: "250px",
                  height: "56px",
                }}
                endIcon={<ArrowRight />}
                onClick={() => {
                  handleOnClick("Academy");
                }}
              >
                <span className="button-text">Join as an Academy</span>
              </Button>
            </div>
          </ProductCard>
        </div>
      ) : (
        <div className="pcw-scroll">
          <div
            className="product-card-wrapper"
            style={{
              marginTop: "100px",
            }}
          >
            <ProductCard src={Venue} title="Vendor">
              <div className="text-product">
                <Typography
                  variant="p"
                  style={{
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "100%",
                  }}
                >
                  We will facilitate recreational sports players to find and
                  book sports venues and facilities through the ATHLEAD
                  INDONESIA website. We will make booking sports venues or
                  facilities easier by using the ATHLEAD INDONESIA website
                  service
                  <br />
                  <br />
                  Recreational sports players and activists will find it easier
                  to book sports venues or facilities by using the ATHLEAD
                  INDONESIA website service.
                </Typography>
              </div>
              <div className="button-container">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "white",
                    color: "#7D0E23",
                    width: "182px",
                    height: "50px",
                  }}
                  endIcon={<ArrowRight />}
                  onClick={() => {
                    handleOnClick("Vendor");
                  }}
                >
                  <span className="button-text">Join as a Venue</span>
                </Button>
              </div>
            </ProductCard>
            <ProductCard src={Photo} title="Photographer">
              <div className="text-product">
                <Typography
                  variant="p"
                  style={{
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "100%",
                  }}
                >
                  ATHLEAD INDONESIA will assist you with a photographer service
                  booking feature to capture and share your moment doing all
                  kinds of sports activities. We will collaborate with
                  professional photographers with a great sports photography
                  portfolio.
                  <br />
                  <br />
                  With these services, ATHLEAD INDONESIA will help recreational
                  sports players and activists try a new sport or increase their
                  ability in a sport by using the services of a professional
                  coach.
                </Typography>
              </div>
              <div className="button-container">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "white",
                    color: "#7D0E23",
                    width: "204px",
                    height: "50px",
                  }}
                  endIcon={<ArrowRight />}
                  onClick={() => {
                    handleOnClick("Photographer");
                  }}
                >
                  <span className="button-text">Join as a Photographer</span>
                </Button>
              </div>
            </ProductCard>
            <ProductCard src={Whistle} title="Coach">
              <div className="text-product">
                <Typography
                  variant="p"
                  style={{
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "100%",
                  }}
                >
                  ATHLEAD INDONESIA will facilitate recreational sports players
                  and activists to find and book sports venues and facilities
                  through the ATHLEAD INDONESIA website.
                  <br />
                  <br />
                  With these services, ATHLEAD INDONESIA will help recreational
                  sports players try a new sport or increase their ability in a
                  sport by using the services of a professional coach.
                </Typography>
              </div>
              <div className="button-container">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "white",
                    color: "#7D0E23",
                    width: "182px",
                    height: "50px",
                  }}
                  endIcon={<ArrowRight />}
                  onClick={() => {
                    handleOnClick("Coach");
                  }}
                >
                  <span className="button-text">Join as a Coach</span>
                </Button>
              </div>
            </ProductCard>
            <ProductCard src={Laptop} title="Academy">
              <div className="text-product">
                <Typography
                  variant="p"
                  style={{
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "100%",
                  }}
                >
                  ATHLEAD INDONESIA will facilitate recreational sports players
                  and activists to find and book sports venues and facilities
                  through the ATHLEAD INDONESIA website.
                  <br />
                  <br />
                  With these services, ATHLEAD INDONESIA will help recreational
                  sports players seek and join sports academies.
                </Typography>
              </div>
              <div className="button-container">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "white",
                    color: "#7D0E23",
                    width: "182px",
                    height: "50px",
                  }}
                  endIcon={<ArrowRight />}
                  onClick={() => {
                    handleOnClick("Academy");
                  }}
                >
                  <span className="button-text">Join as an Academy</span>
                </Button>
              </div>
            </ProductCard>
          </div>
        </div>
      )}
      <div className="container-partner">
        <div className="partner-wrapper">
          <p className="partner-title">WHY BECOME ATHLEAD PARTNER?</p>
          <p className="partner-subtitle">
            Whether you are a sports venue, coach, sports academy, or
            photographer, becoming ATHLEAD <br /> INDONESIA Partner can benefit
            your service in a number of ways
          </p>
          <div className="partner-card-wrapper">
            <PartnerCard
              Icon={AddressBook}
              title="Online Booking"
              content={[
                "Calendar Sync",
                "Seamless Booking Process",
                "Staff/Workers Effeciency",
                "Boost Conversion",
              ]}
            />
            <PartnerCard
              Icon={ShoppingBag}
              title="Marketing"
              content={[
                "Search Optimization",
                "Social Media Ads",
                "Professional Company Pages",
              ]}
            />
            <PartnerCard
              Icon={Signal}
              title="Increased Utilisation"
              content={[
                "Search Optimization",
                "Promote/Campaign",
                "Ease of access",
              ]}
            />
          </div>
          <div className="partner-label">
            <div className="partner-label-wrapper">
              <div className="plwiw">
                <div className="pl-txt">
                  <p
                    className="plt-1"
                    style={{
                      marginBottom: "10px",
                    }}
                  >
                    INTERESTED TO INCREASE YOUR SPORTS BUSINESS?
                  </p>
                  <p
                    className="plt-2"
                    style={{
                      margin: "0 0 0 0",
                    }}
                  >
                    BECOME <span className="button-text">OUR PARTNER</span> NOW!
                  </p>
                </div>
                <button className="pltb-wrapper">
                  <span className="button-text">See Details</span>
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Partner;
