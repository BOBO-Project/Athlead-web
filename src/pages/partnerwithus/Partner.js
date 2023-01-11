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
  createTheme,
  ThemeProvider,
  Breadcrumbs,
} from "@mui/material";

///
import useTranslate from "../../hooks/useTranslate";
import english from "./locales/en-US.json";
import indo from "./locales/id.json";
import ProductCard from "./ProductCard";
import PartnerCard from "./PartnerCard";
import Form from "components/formPartner/Form";
import { Close } from "@mui/icons-material";
import { Link } from "react-router-dom";
import BreadcrumbsComp from "components/breadcrumbs-comp/breadcrumbs";

const Partner = () => {
  const { translate } = useTranslate(english, indo);
  const [isModal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const isResponsive = window.innerWidth <= 800;
  const handleOnClick = (e) => {
    setTitle(e);
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  return (
    <div id="partnerPage">
      <div
        style={{
          backgroundImage: `url('${banner}')`,
        }}
        className="banner"
      >
        {/* <div className="breadcrumbs">
          <BreadcrumbsComp page="Partner With Us" />
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
      <div className="container-modal">
        <Modal open={isModal}>
          <div className="container-box">
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "500px",
                bgcolor: "white",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
                overflow: "scroll",
                height: "800px",
                "@media (max-width:800px)": {
                  height: "500px",
                  width: "300px",
                },
              }}
              className="box-modal"
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {/* <ThemeProvider theme={theme}> */}
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: "800",
                    fontSize: "2rem",
                    "@media (max-width:800px)": {
                      fontSize: "1.5rem",
                    },
                  }}
                >
                  {title} Registration
                </Typography>
                {/* </ThemeProvider> */}
                {/* <ThemeProvider theme={theme}> */}
                <IconButton
                  className="close-button"
                  sx={{
                    backgroundColor: "black",
                    height: "40px",
                    width: "40px",
                    "@media (max-width:800px)": {
                      height: "30px",
                      width: "30px",
                    },
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
                {/* </ThemeProvider> */}
              </div>
              <Form title={title} type={title} closed={() => setModal(false)} />
            </Box>
          </div>
        </Modal>
      </div>
      <div className="container-openingWord">
        <div className="container-openingWord">
          <Typography variant="h1" className="openingWord">
            {translate("openingword")}
          </Typography>
        </div>
      </div>
      {!isResponsive ? (
        <div className="product-card-wrapper">
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
                {translate("venue1")}
                <br />
                <br />
                {translate("venue2")}
              </Typography>
            </div>
            <div className="button-container">
              <Button
                // variant="contained"
                // style={{
                //   backgroundColor: "white",
                //   color: "#7D0E23",
                //   // width: "250px",
                //   height: "56px",
                // }}
                endIcon={<ArrowRight />}
                onClick={() => {
                  handleOnClick("Vendor");
                }}
                className="button-click"
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
                {translate("photographer1")}
                <br />
                <br />
                {translate("photographer2")}
              </Typography>
            </div>
            <div className="button-container">
              <Button
                variant="contained"
                // style={{
                //   backgroundColor: "white",
                //   color: "#7D0E23",
                //   // width: "280px",
                //   height: "56px",
                //   fontSize:"16px"
                // }}
                endIcon={<ArrowRight />}
                onClick={() => {
                  handleOnClick("Photographer");
                }}
                className="button-click"
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
                {translate("coach1")}
                <br />
                <br />
                {translate("coach2")}
              </Typography>
            </div>
            <div className="button-container">
              <Button
                variant="contained"
                // style={{
                //   backgroundColor: "white",
                //   color: "#7D0E23",
                //   // width: "250px",
                //   height: "56px",
                // }}
                endIcon={<ArrowRight />}
                onClick={() => {
                  handleOnClick("Coach");
                }}
                className="button-click"
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
                {translate("academy1")}
                <br />
                <br />
                {translate("academy2")}
              </Typography>
            </div>
            <div className="button-container">
              <Button
                variant="contained"
                // style={{
                //   backgroundColor: "white",
                //   color: "#7D0E23",
                //   // width: "250px",
                //   height: "56px",
                // }}
                endIcon={<ArrowRight />}
                onClick={() => {
                  handleOnClick("Academy");
                }}
                className="button-click"
              >
                <span className="button-text">Join as an Academy</span>
              </Button>
            </div>
          </ProductCard>
        </div>
      ) : (
        <div className="pcw-scroll">
          <div className="product-card-wrapper">
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
                  {translate("venue1")}
                  <br />
                  <br />
                  {translate("venue2")}
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
                  {translate("photographer1")}
                  <br />
                  <br />
                  {translate("photographer2")}
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
                  {translate("coach1")}
                  <br />
                  <br />
                  {translate("coach2")}
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
              <div>
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
                    {translate("academy1")}
                    <br />
                    <br />
                    {translate("academy2")}
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
              </div>
            </ProductCard>
          </div>
        </div>
      )}
      {/* <div className="container-partner">
        <div className="partner-wrapper">
          <p className="partner-title">{translate("31")}</p>
          <p className="partner-subtitle">
            {translate("32")}
            <br />
            {translate("33")}
          </p>
          <div className="partner-card-wrapper">
            <PartnerCard
              Icon={AddressBook}
              title={translate("34")}
              desc={translate("35")}
              points={[translate("36"), translate("37"), translate("38")]}
              content={[
                translate("39"),
                translate("40"),
                translate("41"),
                translate("42"),
              ]}
            />
            <PartnerCard
              Icon={ShoppingBag}
              title={translate("43")}
              desc={translate("44")}
              points={[translate("45"), translate("46"), translate("47")]}
              content={[translate("48"), translate("49"), translate("50")]}
            />
            <PartnerCard
              Icon={Signal}
              desc={translate("51")}
              points={[translate("52"), translate("53"), translate("54")]}
              title={translate("55")}
              content={[translate("56"), translate("57"), translate("58")]}
            />
          </div> */}
      {/* <div className="partner-label">
            <div className="partner-label-wrapper">
              <div className="plwiw">
                <div className="pl-txt">
                  <p className="plt-1">{translate("59")}</p>
                  <p className="plt-2">
                    {translate("60")}
                    <span>{translate("61")}</span> {translate("62")}
                  </p>
                </div>
                <button className="pltb-wrapper">
                  <span>{translate("63")}</span>
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div> */}
      {/* </div>
      </div> */}
      {/* </div> */}
    </div>
  );
};

export default Partner;
