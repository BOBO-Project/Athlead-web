import React from "react";
import useTranslate from "../../hooks/useTranslate";
import {
  Paper,
  Container,
  Grid,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";

import english from "./locales/en-US.json";
import indo from "./locales/id.json";

const Aboutus = () => {
  const { translate } = useTranslate(english, indo);

  return (
    <div>
      <Paper
        style={{
          width: "100vw",
          backgroundImage: `url(${require("../../assets/aboutus-banner.png")})`,
          height: "25vw",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <AppBar elevation={0} style={{ background: "none" }}>
          <Toolbar
            style={{
              width: "80%",
              margin: "5% auto",
              display: "inline-block",
            }}
          >
            <a
              href="/"
              style={{
                flexGrow: "1",
                textDecoration: "none",
                color: "#FFFF",
              }}
            >
              Home
            </a>
            <a href="/about-us">About Us</a>
          </Toolbar>
        </AppBar> */}
        <Container maxWidth="md" style={{ textAlign: "center" }}>
          <Grid>
            <Typography
              variant="h1"
              style={{
                fontSize: "64px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "110%",
                color: "#FEFEFE",
              }}
            >
              {translate("title")}
            </Typography>
            <Typography
              variant="h3"
              style={{
                fontSize: "36px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "110%",
                color: "#A9A9A9",
              }}
            >
              {translate("description")}
            </Typography>
          </Grid>
        </Container>
      </Paper>
      <Container
        style={{
          marginTop: "40px",
          display: "flex",
          maxWidth: "100%",
          paddingLeft: "140px",
          paddingRight: "130px",
          // flexWrap: "wrap",
          // flexDirection: "column",
        }}
      >
        <div style={{ marginRight: "95px" }}>
          <Typography
            variant="p"
            style={{
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "20px",
              lineHeight: "140%",
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
              }}
            >
              {translate("openingword")}
            </Typography>{" "}
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
          </Typography>
        </div>
        <div>
          <img
            src={require("../../assets/circle-dot.png")}
            style={{
              position: "absolute",
              width: "78px",
              height: "93px",
              left: "67%",
            }}
          />
          <Grid container style={{ position: "relative" }}>
            <Grid item>
              <img
                src={require("../../assets/circle-1.png")}
                style={{ width: "443px", height: "443px", marginTop: "155px" }}
              />
            </Grid>
            <Grid item>
              <img
                src={require("../../assets/about-us-image-1.png")}
                style={{
                  position: "absolute",
                  width: "200px",
                  height: "300px",
                  borderRadius: "10px",
                  right: "50%",
                  top: "130px",
                }}
              />
            </Grid>
            <Grid item>
              <img
                src={require("../../assets/about-us-image-2.png")}
                style={{
                  position: "absolute",
                  width: "200px",
                  height: "300px",
                  borderRadius: "10px",
                  right: "1%",
                  top: "42px",
                }}
              />
            </Grid>
            <Grid item>
              <img
                src={require("../../assets/about-us-image-3.png")}
                style={{
                  position: "absolute",
                  width: "200px",
                  height: "200px",
                  borderRadius: "10px",
                  right: "1%",
                  top: "60%",
                }}
              />
            </Grid>
            <Grid item>
              <img
                src={require("../../assets/about-us-image-4.png")}
                style={{
                  position: "absolute",
                  width: "200px",
                  height: "200px",
                  borderRadius: "10px",
                  right: "50%",
                  top: "77%",
                }}
              />
            </Grid>
          </Grid>
          <img
            src={require("../../assets/circle-dot-2.png")}
            style={{
              position: "absolute",
              width: "97px",
              height: "93px",
              left: "85%",
              top: "175%",
            }}
          />
        </div>
      </Container>
    </div>
  );
};

export default Aboutus;
