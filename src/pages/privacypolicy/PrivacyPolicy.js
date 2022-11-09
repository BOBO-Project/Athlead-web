import React from "react";
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
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const PrivacyPolicy = () => {
  const { translate } = useTranslate(english, indo);

  return (
    <div id="privacyPolicy">
      <div
        style={{
          backgroundImage: `url('${banner}')`,
        }} className="banner"
      >
         <div className="container-banner">
          <div className="container-content">
            <Typography variant="h1" className="title-container">{translate("title")}</Typography>
            <Typography variant="h3" className="title-description">{translate("description")}</Typography>
          </div>
        </div>
      </div>
      <div>
        <Container
          className="container-text-description"
        >
          <div
            className="container-description"
          >
            <Typography variant="h1" className="title-description-content">{translate("title")}</Typography>
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
            <img
              src={icon}
              className="image-dot"
            />
          </div>
        </Container>
        <div className="content-accordion">
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
              <Typography >01. IMPORTANT INFORMATION AND WHO WE ARE</Typography>
            </AccordionSummary>
            <AccordionDetails className="content-accordion-detail">
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and
                <br />
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and
              </Typography>
            </AccordionDetails>
          </Accordion>
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
              02. IMPORTANT INFORMATION AND WHO WE ARE
            </AccordionSummary>
             <AccordionDetails className="content-accordion-detail">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            </AccordionDetails>
          </Accordion>
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
              03. PERSONAL INFORMATION WE COLLECT
            </AccordionSummary>
             <AccordionDetails className="content-accordion-detail">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            </AccordionDetails>
          </Accordion>
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
              04. PERSONAL INFORMATION WE COLLECT
            </AccordionSummary>
             <AccordionDetails className="content-accordion-detail">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            </AccordionDetails>
          </Accordion>
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
              05. HOW YOUR PERSONAL DATA IS COLLECTED
            </AccordionSummary>
             <AccordionDetails className="content-accordion-detail">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            </AccordionDetails>
          </Accordion>
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
              06. HOW YOUR PERSONAL DATA IS COLLECTED
            </AccordionSummary>
             <AccordionDetails className="content-accordion-detail">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            </AccordionDetails>
          </Accordion>
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
              07. HOW WE USE THE INFORMATION WE COLLECT
            </AccordionSummary>
             <AccordionDetails className="content-accordion-detail">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            </AccordionDetails>
          </Accordion>
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
              08. HOW WE USE THE INFORMATION WE COLLECT
            </AccordionSummary>
             <AccordionDetails className="content-accordion-detail">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            </AccordionDetails>
          </Accordion>
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
              09. SHARING AND DISCLOSURE OF YOUR PERSONAL DATA
            </AccordionSummary>
             <AccordionDetails className="content-accordion-detail">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            </AccordionDetails>
          </Accordion>
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
              10. SHARING AND DISCLOSURE OF YOUR PERSONAL DATA
            </AccordionSummary>
             <AccordionDetails className="content-accordion-detail">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            </AccordionDetails>
          </Accordion>
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
              11. PERSONAL INFORMATION WE COLLECT
            </AccordionSummary>
             <AccordionDetails className="content-accordion-detail">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            </AccordionDetails>
          </Accordion>
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
              12. PERSONAL INFORMATION WE COLLECT
            </AccordionSummary>
             <AccordionDetails className="content-accordion-detail">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            </AccordionDetails>
          </Accordion>
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
              13. PERSONAL INFORMATION WE COLLECT
            </AccordionSummary>
             <AccordionDetails className="content-accordion-detail">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            </AccordionDetails>
          </Accordion>
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
              14. PERSONAL INFORMATION WE COLLECT
            </AccordionSummary>
             <AccordionDetails className="content-accordion-detail">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
