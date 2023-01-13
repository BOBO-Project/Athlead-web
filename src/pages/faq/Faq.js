import React, { useState } from "react";
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
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import { ExpandMore, Title } from "@mui/icons-material";

const Faq = () => {
  const { translate } = useTranslate(english, indo);
  const isResponsive = window.innerWidth <= 768;
  const [grid, setGrid] = useState(isResponsive ? 18 : 6);

  return (
    <div id="faq">
      <div className="container-faq">
        <div className="container-text-wrapper">
          <h1 className="ctw-title">{translate("header")}</h1>
          <h3 className="ctw-description">{translate("description")}</h3>
        </div>
        <div className="accordion-faq-wrapper">
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={grid}>
                <Accordion className="content-accordion-text">
                  {/* <Accordion> */}
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
                    {/* <AccordionDetails> */}
                    {translate("content1")}
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item xs={grid}>
                <Accordion className="content-accordion-text">
                  {/* <Accordion> */}
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
                    {/* <AccordionDetails> */}
                    {translate("content2")}
                  </AccordionDetails>
                </Accordion>
              </Grid><Grid item xs={grid}>
                <Accordion className="content-accordion-text">
                  {/* <Accordion> */}
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
                    {/* <AccordionDetails> */}
                    {translate("content3")}
                  </AccordionDetails>
                </Accordion>
              </Grid><Grid item xs={grid}>
                <Accordion className="content-accordion-text">
                  {/* <Accordion> */}
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
                    {/* <AccordionDetails> */}
                    {translate("content4")}
                  </AccordionDetails>
                </Accordion>
              </Grid><Grid item xs={grid}>
                <Accordion className="content-accordion-text">
                  {/* <Accordion> */}
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
                    {/* <AccordionDetails> */}
                    {translate("content5")}
                  </AccordionDetails>
                </Accordion>
              </Grid><Grid item xs={grid}>
                <Accordion className="content-accordion-text">
                  {/* <Accordion> */}
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
                    {/* <AccordionDetails> */}
                    {translate("content6")}
                  </AccordionDetails>
                </Accordion>
              </Grid><Grid item xs={grid}>
                <Accordion className="content-accordion-text">
                  {/* <Accordion> */}
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
                    {/* <AccordionDetails> */}
                    {translate("content7")}
                  </AccordionDetails>
                </Accordion>
              </Grid><Grid item xs={grid}>
                <Accordion className="content-accordion-text">
                  {/* <Accordion> */}
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
                    {/* <AccordionDetails> */}
                    {translate("content8")}
                  </AccordionDetails>
                </Accordion>
              </Grid><Grid item xs={grid}>
                <Accordion className="content-accordion-text">
                  {/* <Accordion> */}
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
                    {/* <AccordionDetails> */}
                    {translate("content9")}
                  </AccordionDetails>
                </Accordion>
              </Grid><Grid item xs={grid}>
                <Accordion className="content-accordion-text">
                  {/* <Accordion> */}
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    // sx={{
                    //   height:'84px'
                    // }}
                    className="accordion-summary"
                  >
                    {translate("title10")}
                  </AccordionSummary>
                  <AccordionDetails className="content-accordion-detail">
                    {/* <AccordionDetails> */}
                    {translate("content10")}
                  </AccordionDetails>
                </Accordion>
              </Grid><Grid item xs={grid}>
                <Accordion className="content-accordion-text">
                  {/* <Accordion> */}
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    // sx={{
                    //   height:'84px'
                    // }}
                    className="accordion-summary"
                  >
                    {translate("title11")}
                  </AccordionSummary>
                  <AccordionDetails className="content-accordion-detail">
                    {/* <AccordionDetails> */}
                    {translate("content11")}
                  </AccordionDetails>
                </Accordion>
              </Grid><Grid item xs={grid}>
                <Accordion className="content-accordion-text">
                  {/* <Accordion> */}
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    // sx={{
                    //   height:'84px'
                    // }}
                    className="accordion-summary"
                  >
                    {translate("title12")}
                  </AccordionSummary>
                  <AccordionDetails className="content-accordion-detail">
                    {/* <AccordionDetails> */}
                    {translate("content12")}
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
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
