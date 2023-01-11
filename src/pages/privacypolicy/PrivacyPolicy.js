import React, { useEffect, useState } from "react";
import useTranslate from "../../hooks/useTranslate";
import banner from "../../assets/img/PP-banner.png";
import title from "../../assets/img/pp-tittle.png";
import icon from "assets/img/icon-pp.png";

import "./styles-privacypolicy.scss";
import english from "./locales/en-US.json";
import indo from "./locales/id.json";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import BreadcrumbsComp from "components/breadcrumbs-comp/breadcrumbs";

const PrivacyPolicy = () => {
  const { translate } = useTranslate(english, indo);
  const isResponsive = window.innerWidth <= 768;
  const [grid, setGrid] = useState(isResponsive ? 18 : 6);

  return (
    <div id="privacyPolicy">
      <div
        style={{
          backgroundImage: `url('${banner}')`,
        }}
        className="banner"
      >
        <div className="container-banner">
          {/* <div>
            <BreadcrumbsComp page="Privacy Policy" />
          </div> */}
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
        <Container className="container-text-description">
          <div className="container-description">
            <Typography variant="h1" className="title-description-content">
              {translate("title")}
            </Typography>
            <Typography variant="p" className="content-text-privacyPolicy">
              {translate("text1")}
              {/* The following privacy policy describes how ATHLEAD INDONESIA (PT
              Kita Athlead Indonesia, "we", "us" or "our") respects your privacy
              and is committed to protecting your personal data. */}
              <br />
              <br />
              {translate("text2")}
              {/* This privacy notice will inform you as to how we look after your
              personal data when you visit our website (Site) (regardless of
              where you visit it from) and tell you about your privacy rights
              and how the law protects you. */}
              <br />
              <br />
              {translate("text3")}
              {/* This privacy notice is in a layered format so you can click
              through to the specific areas below. */}
            </Typography>
          </div>
          <div>
            <img src={icon} className="image-dot" />
          </div>
        </Container>
        {/* {

        } */}
        <div className="content-accordion">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            style={{
              marginTop:'40px',
              marginBottom:'40px'
            }}
          >
            <Grid item xs={grid}>
              <Accordion className="content-accordion-text">
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  // sx={{
                  //   height:'84px'
                  // }}
                  className="accordion-summary"
                >
                  {translate("title1")}
                </AccordionSummary>
                <AccordionDetails className="content-accordion-detail">
                  <ol type="a">
                    <li>
                      <Typography>{translate("textContent1a")}</Typography>
                      <br />
                      <Typography>{translate("textContent1a1")}</Typography>
                    </li>
                    <br />
                    <li>
                      <Typography>{translate("textContent1b")}</Typography>
                    </li>
                    <br />
                    <li>
                      <Typography>{translate("textContent1c")}</Typography>
                      <br />
                      <Typography>{translate("textContent1c1")}</Typography>
                    </li>
                    <br />
                    <li>
                      <Typography>{translate("textContent1d")}</Typography>
                    </li>
                    <br />
                    <li>
                      <Typography>{translate("textContent1e")}</Typography>
                    </li>
                  </ol>
                  {/* <Typography>{translate("textContent1a")}</Typography>
                  <br />
                  <br />
                  {translate("textContent1a1")}
                  <br />
                  <br />
                  {translate("textContent1b")}
                  <br />
                  <br />
                  {translate("textContent1c")}
                  <br />
                  <br />
                  {translate("textContent1c1")}
                  <br />
                  <br />
                  {translate("textContent1d")}
                  <br />
                  <br />
                  {translate("textContent1e")} */}
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={grid}>
              <Accordion className="content-accordion-text">
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  // sx={{
                  //   height:'84px'
                  // }}
                  className="accordion-summary"
                >
                  {translate("title2")}
                </AccordionSummary>
                <AccordionDetails className="content-accordion-detail">
                  <Typography>{translate("textContent2")}</Typography>
                  <ol type="a">
                    <li>
                      <Typography>{translate("textContent2a")}</Typography>
                      <br />
                      <Typography>{translate("textContent2b")}</Typography>
                    </li>
                    <br />
                    <li>
                      <Typography>{translate("textContent2c")}</Typography>
                    </li>
                    <br />
                    <li>
                      <Typography>{translate("textContent2d")}</Typography>
                      <br />
                      <Typography>{translate("textContent1c1")}</Typography>
                    </li>
                    <br />
                    <li>
                      <Typography>{translate("textContent2e")}</Typography>
                    </li>
                    <br />
                  </ol>
                  {/* {translate("textContent3a")}
                  <br />
                  <br />
                  {translate("textContent3b")}
                  <br />
                  <br />
                  {translate("textContent2b")}
                  <br />
                  <br />
                  {translate("textContent2c")}
                  <br />
                  <br />
                  {translate("textContent2d")}
                  <br />
                  <br />
                  {translate("textContent2e")} */}
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={grid}>
              <Accordion className="content-accordion-text">
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  // sx={{
                  //   height:'84px'
                  // }}
                  className="accordion-summary"
                >
                  {translate("title3")}
                </AccordionSummary>
                <AccordionDetails className="content-accordion-detail">
                  <ol type="a">
                    <li>
                      <Typography>{translate("textContent3a")}</Typography>
                    </li>
                    <br />
                    <li>
                      <Typography>{translate("textContent3b")}</Typography>
                    </li>
                  </ol>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={grid}>
              <Accordion className="content-accordion-text">
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  // sx={{
                  //   height:'84px'
                  // }}
                  className="accordion-summary"
                >
                  {translate("title4")}
                </AccordionSummary>
                <AccordionDetails className="content-accordion-detail">
                <ol type="a">
                  <li>
                    <Typography>{translate("textContent4a")}</Typography>
                    <ul>
                      <Typography><li>{translate("liA1")}</li></Typography>
                      <Typography><li>{translate("liA2")}</li></Typography>
                      <Typography><li>{translate("liA3")}</li></Typography>
                      <Typography><li>{translate("liA4")}</li></Typography>
                      <Typography><li>{translate("liA5")}</li></Typography>
                      <Typography><li>{translate("liA6")}</li></Typography>
                      <Typography><li>{translate("liA7")}</li></Typography>
                      <Typography><li>{translate("liA8")}</li></Typography>
                      <Typography><li>{translate("liA9")}</li></Typography>
                    </ul>
                  </li>
                  <br/>
                  <li>
                    <Typography>{translate("textContent4b")}</Typography>
                    <ul>
                      <Typography><li>{translate("liB1")}</li></Typography>
                      <Typography><li>{translate("liB2")}</li></Typography>
                      <Typography><li>{translate("liB3")}</li></Typography>
                      <Typography><li>{translate("liB4")}</li></Typography>
                      <Typography><li>{translate("liB5")}</li></Typography>
                      <Typography><li>{translate("liB6")}</li></Typography>
                      <Typography><li>{translate("liB7")}</li></Typography>
                      <Typography><li>{translate("liB8")}</li></Typography>
                    </ul>
                  </li>
                  <br/>
                  <li>
                    <Typography>{translate("textContent4c")}</Typography>
                    <ul>
                      <Typography><li>{translate("liC1")}</li></Typography>
                      <Typography><li>{translate("liC2")}</li></Typography>
                      <Typography><li>{translate("liC3")}</li></Typography>
                      <Typography><li>{translate("liC4")}</li></Typography>
                      <Typography><li>{translate("liC5")}</li></Typography>
                    </ul>
                  </li>
                  <br/>
                  <li>
                    <Typography>{translate("textContent4d")}</Typography>
                    <ul>
                      <Typography><li>{translate("liD1")}</li></Typography>
                      <Typography><li>{translate("liD2")}</li></Typography>
                      <Typography><li>{translate("liD3")}</li></Typography>
                      <Typography><li>{translate("liD4")}</li></Typography>
                      <Typography><li>{translate("liD5")}</li></Typography>
                      <Typography><li>{translate("liD6")}</li></Typography>
                    </ul>
                  </li>
                  <br/>
                </ol>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={grid}>
              <Accordion className="content-accordion-text">
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  // sx={{
                  //   height:'84px'
                  // }}
                  className="accordion-summary"
                >
                  {translate("title5")}
                </AccordionSummary>
                <AccordionDetails className="content-accordion-detail">
                  <Typography>{translate("textContent5")}</Typography>
                  <ul>
                    <li><Typography>{translate("li5a")}</Typography></li>
                    <li><Typography>{translate("li5b")}</Typography></li>
                  </ul>
                  <Typography>{translate("textContent5a")}</Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={grid}>
              <Accordion className="content-accordion-text">
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  // sx={{
                  //   height:'84px'
                  // }}
                  className="accordion-summary"
                >
                  {translate("title6")}
                </AccordionSummary>
                <AccordionDetails className="content-accordion-detail">
                  <Typography>{translate("textContent6")}</Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={grid}>
              <Accordion className="content-accordion-text">
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  // sx={{
                  //   height:'84px'
                  // }}
                  className="accordion-summary"
                >
                  {translate("title7")}
                </AccordionSummary>
                <AccordionDetails className="content-accordion-detail">
                  <Typography>{translate("textContent7")}</Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={grid}>
              <Accordion className="content-accordion-text">
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  // sx={{
                  //   height:'84px'
                  // }}
                  className="accordion-summary"
                >
                  {translate("title8")}
                </AccordionSummary>
                <AccordionDetails className="content-accordion-detail">
                  {translate("textContent8")}
                  <br />
                  <ul>
                    <Typography><li>{translate("li81")}</li></Typography>
                    <Typography><li>{translate("li82")}</li></Typography>
                    <Typography><li>{translate("li83")}</li></Typography>
                    <Typography><li>{translate("li84")}</li></Typography>
                    <Typography><li>{translate("li85")}</li></Typography>
                    <Typography><li>{translate("li86")}</li></Typography>
                    <Typography><li>{translate("li87")}</li></Typography>
                  </ul>
                  <br />
                  <Typography>{translate("textContent8a")}</Typography>
                  <br />
                  <ul>
                    <Typography><li>{translate("li8A1")}</li></Typography>
                    <Typography><li>{translate("li8A2")}</li></Typography>
                    <Typography><li>{translate("li8A3")}</li></Typography>
                  </ul>
                  <br />
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={grid}>
              <Accordion className="content-accordion-text">
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  // sx={{
                  //   height:'84px'
                  // }}
                  className="accordion-summary"
                >
                  {translate("title9")}
                </AccordionSummary>
                <AccordionDetails className="content-accordion-detail">
                  <Typography>{translate("textContent9")} privacypolicy@athlead.id</Typography>
                  <br />
                  <br />
                  <Typography>{translate("textContent9a")}</Typography>
                  <br />
                  <Typography>{translate("textContent9b")} contact@athlead.id</Typography> 
                  <br />
                  <Typography>{translate("textContent9c")} venue@athlead.id</Typography> 
                  <br />
                  <Typography>{translate("textContent9d")} coach@athlead.id</Typography> 
                  <br />
                  <Typography>{translate("textContent9e")} academy@athlead.id</Typography> 
                  <br />
                  <Typography>{translate("textContent9f")} photographer@athlead.id</Typography> 
                  <br />
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
