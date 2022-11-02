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
import title from "assets/img/pws-title.png";
import { Container } from "@mui/system";
import { Typography, Button, Modal, Box } from "@mui/material";

///
import useTranslate from "../../hooks/useTranslate";
import english from "./locales/en-US.json";
import indo from "./locales/id.json";
import ProductCard from "./ProductCard";
import PartnerCard from "./PartnerCard";
import Form from "components/formPartner/Form";

const Partner = () => {
  const { translate } = useTranslate(english, indo);
  const [isModal, setModal] = useState(false);
  const [title, setTitle] = useState("");

  const handleOnClick = (e) => {
    setTitle(e);
    setModal(true);
    console.log(title);
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
    height: '800px',
  };

  return (
    <div id="partnerPage">
      <div
        style={{
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "430px",
          objectFit: "none",
          backgroundImage: `url('${banner}')`,
        }}
      >
        <img
          src={title}
          style={{
            width: "500px",
            position: "absolute",
            top: "40%",
            textAlign: "center",
            right: "35%",
            margin: "auto",
            // height:'70px'
          }}
        />
      </div>
      <Modal open={isModal} onClose={handleClose}>
        <div>
          <Box sx={style}>
            <Form title={title} type={title} />
            {/* <h1>{title}</h1> */}
          </Box>
        </div>
      </Modal>
      <Container
        style={{
          marginTop: "40px",
          display: "flex",
          maxWidth: "100%",
          paddingLeft: "170px",
          paddingRight: "130px",
          // flexWrap: "wrap",
          // flexDirection: "column",
        }}
      >
        <div
          style={{
            marginRight: "85px",
          }}
        >
          <Typography
            variant="p"
            style={{
              color: "#282828",
              fontWeight: "800",
              fontSize: "36px",
              lineHeight: "110%",
              fontStyle: "normal",
              color: "#7D0E23",
            }}
          >
            {translate("openingword")}
          </Typography>
        </div>
      </Container>
      <div
        className="product-card-wrapper"
        style={{
          marginTop: "100px",
        }}
      >
        <ProductCard src={Venue} title="Venue">
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
            sports venues and facilities through the ATHLEAD INDONESIA website.
            We will make booking sports venues or facilities easier by using the
            ATHLEAD INDONESIA website service
            <br />
            <br />
            Recreational sports players and activists will find it easier to
            book sports venues or facilities by using the ATHLEAD INDONESIA
            website service.
          </Typography>
          <div
            style={{
              marginTop: "20%",
              textAlign: "center",
            }}
          >
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
                handleOnClick("Venue");
              }}
            >
              <span>Join as a Venue</span>
            </Button>
          </div>
        </ProductCard>
        <ProductCard src={Photo} title="Photographer">
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
            booking feature to capture and share your moment doing all kinds of
            sports activities. We will collaborate with professional
            photographers with a great sports photography portfolio.
            <br />
            <br />
            With these services, ATHLEAD INDONESIA will help recreational sports
            players and activists try a new sport or increase their ability in a
            sport by using the services of a professional coach.
          </Typography>
          <div
            style={{
              marginTop: "20%",
              textAlign: "center",
            }}
          >
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
              <span>Join as a Photographer</span>
            </Button>
          </div>
        </ProductCard>
        <ProductCard src={Whistle} title="Coach">
          <Typography
            variant="p"
            style={{
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "140%",
            }}
          >
            ATHLEAD INDONESIA will facilitate recreational sports players and
            activists to find and book sports venues and facilities through the
            ATHLEAD INDONESIA website.
            <br />
            <br />
            With these services, ATHLEAD INDONESIA will help recreational sports
            players try a new sport or increase their ability in a sport by
            using the services of a professional coach.
          </Typography>
          <div
            style={{
              marginTop: "34.5%",
              textAlign: "center",
            }}
          >
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
              <span>Join as a Coach</span>
            </Button>
          </div>
        </ProductCard>
        <ProductCard src={Laptop} title="Academy">
          <Typography
            variant="p"
            style={{
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "140%",
            }}
          >
            ATHLEAD INDONESIA will facilitate recreational sports players and
            activists to find and book sports venues and facilities through the
            ATHLEAD INDONESIA website.
            <br />
            <br />
            With these services, ATHLEAD INDONESIA will help recreational sports
            players seek and join sports academies.
          </Typography>
          <div
            style={{
              marginTop: "41.5%",
              textAlign: "center",
            }}
          >
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
              <span>Join as an Academy</span>
            </Button>
          </div>
        </ProductCard>
      </div>
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
                  BECOME <span>OUR PARTNER</span> NOW!
                </p>
              </div>
              <button className="pltb-wrapper">
                <span>See Details</span>
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Partner;
