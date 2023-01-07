import React, { useState } from "react";
import "./style-productpage.scss";

import useTranslate from "../../hooks/useTranslate";
import banner from "../../assets/img/product-banner.png";


import productImage from "assets/img/product-cards1.png";
import productImageMobile from "assets/img/product-card-mobile1.png";

////Assets Product Card
import Venue from "assets/img/venue.png";
import Photo from "assets/img/photo.png";
import Whistle from "assets/img/whistle.png";
import Laptop from "assets/img/laptop.png";

import english from "./locales/en-US.json";
import indo from "./locales/id.json";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import ProductCard from "./ProductCard";
import BreadcrumbsComp from "components/breadcrumbs-comp/breadcrumbs";

const Product = () => {
  const { translate, language } = useTranslate(english, indo);
  let productCardWidth = null
  if(language === 'id-ID'){
    productCardWidth = "700px"
  }else{
    productCardWidth = "615px"
  }
  


  const isResponsive = window.innerWidth <= 400;
  return (
    <div id="productPage">
      <div
        style={{
          backgroundImage: `url('${banner}')`,
        }}
        className="banner"
      >
        {/* <div>
          <BreadcrumbsComp page="Product" />
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
      <Container className="container-context">
        <div>
          <Typography variant="h1" className="openingWord-text">
            {translate("openingword")}
          </Typography>
          <Typography variant="p" className="openingWord-text-p">
            <br />
            <br />
            ATHLEAD integrates and houses all sports activities - from the most
            famous to the less known ones -
            <br />
            into one platform which includes supplementary activities for
            recreational sports needs
          </Typography>
        </div>
      </Container>
      <div>
        {!isResponsive ? (
          <div className="container-product-icon">
            <p>
            <img src={productImage} className="product-image" />
            </p>
          </div>
        ) : (
          // <Paper elevation={2} className="container-product-icon">
          //   <div className="product-box">
          //     <Grid
          //       // style={{
          //       //   display: "flex",
          //       //   justifyContent: "center",
          //       //   gap: "100px",
          //       // }}
          //       className="product-box"
          //     >
          //       {productTop.map((e) => {
          //         return (
          //           <div
          //             style={{
          //               marginTop: "40px",
          //             }}
          //           >
          //             <img src={e.img} className="image-product" />
          //             <Typography className="title-product">
          //               {e.title}
          //             </Typography>
          //             {/* style={{textAlign:'center', fontWeight:'bold', color:'#7E7E7E', fontSize:'20px'}} */}
          //           </div>
          //         );
          //       })}
          //     </Grid>
          //   </div>
          //   <Grid
          //     // style={{
          //     //   display: "flex",
          //     //   justifyContent: "center",
          //     //   gap: "100px",
          //     // }}
          //     className="product-box"
          //   >
          //     {productBottom.map((e) => {
          //       return (
          //         <div
          //           style={{
          //             marginTop: "40px",
          //             marginBottom: "40px",
          //           }}
          //         >
          //           <img src={e.img} className="image-product" />
          //           <Typography className="title-product">{e.title}</Typography>
          //         </div>
          //       );
          //     })}
          //   </Grid>
          // </Paper>
          <div className="container-product-icon">
            <img src={productImageMobile} className="product-image" />
          </div>
          // <Paper elevation={2} className="container-product-icon">
          //   <div className="product-box">
          //     <Container
          //       // style={{
          //       //   display: "flex",
          //       //   justifyContent: "center",
          //       //   gap: "100px",
          //       // }}
          //       className="product-box"
          //     >
          //       {productTop.map((e) => {
          //         return (
          //           <div
          //             style={{
          //               marginTop: "40px",
          //             }}
          //           >
          //             <img src={e.img} className="image-product" />
          //             <Typography className="title-product">
          //               {e.title}
          //             </Typography>
          //           </div>
          //         );
          //       })}
          //     </Container>
          //   </div>
          //   <Container
          //   // style={{
          //   //   display: "flex",
          //   //   // flexDirection:'column',
          //   //   justifyContent: "space-between",
          //   //   // gap: "100px",
          //   // }}
          //   >
          //     <Grid
          //       style={{
          //         display: "flex",
          //         flexDirection: "column",
          //         justifyContent: "space-between",
          //         // gap: "100px",
          //       }}
          //     >
          //       {productBottom.map((e, i) => {
          //         if (i < 5) {
          //           return (
          //             <div
          //             // style={{
          //             //   marginTop: "40px",
          //             //   marginBottom: "40px",
          //             // }}
          //             >
          //               <img src={e.img} className="image-product" />
          //               <Typography className="title-product">
          //                 {e.title}
          //               </Typography>
          //             </div>
          //           );
          //         } else {
          //           return (
          //             <div
          //             // style={{
          //             //   marginTop: "40px",
          //             //   marginBottom: "40px",
          //             // }}
          //             >
          //               <img src={e.img} className="image-product" />
          //               <Typography className="title-product">
          //                 {e.title}
          //               </Typography>
          //             </div>
          //           );
          //         }
          //       })}
          //     </Grid>
          //   </Container>
          // </Paper>
        )}
        <div
          className="product-card-wrapper"
          style={{
            marginTop: "100px",
          }}
        >
          <ProductCard src={Venue} title="Venue" lebar={productCardWidth}>
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
          </ProductCard>
          <ProductCard src={Photo} title="Photographer" lebar={productCardWidth}>
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
          </ProductCard>
          <ProductCard src={Whistle} title="Coach" lebar={productCardWidth}>
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
          </ProductCard>
          <ProductCard src={Laptop} title="Academy" lebar={productCardWidth}>
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
                {translate("academy")}
                <br />
                <br />
                {/* Recreational sports players and activists will find it easier to
                book sports venues or facilities by using the ATHLEAD INDONESIA
                website service. */}
              </Typography>
            </div>
          </ProductCard>
        </div>
      </div>
    </div>
  );
};

export default Product;
