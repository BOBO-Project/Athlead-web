import React from "react";
import "./style-productpage.scss";

import useTranslate from "../../hooks/useTranslate";
import banner from "../../assets/img/product-banner.png";
import title from "../../assets/img/title-product.png";

////Assets Product List
import logoClimbing from "assets/img/product-logo/76.png";
import logoGolf from "assets/img/product-logo/77.png";
import logoSwimming from "assets/img/product-logo/78.png";
import logoBowling from "assets/img/product-logo/79.png";
import logoSquash from "assets/img/product-logo/80-1.png";
import logoBadminton from "assets/img/product-logo/80.png";
import logoTennis from "assets/img/product-logo/81-1.png";
import logoFutsal from "assets/img/product-logo/81.png";
import logoSoccer from "assets/img/product-logo/82-1.png";
import logoFootball from "assets/img/product-logo/82.png";
import logoBasketball from "assets/img/product-logo/83-1.png";
import logoVolley from "assets/img/product-logo/83.png";
import logoHorse from "assets/img/product-logo/85.png";


////Assets Product Card
import Venue from "assets/img/venue.png";
import Photo from "assets/img/photo.png";
import Whistle from "assets/img/whistle.png";
import Laptop from "assets/img/laptop.png";

import english from "./locales/en-US.json";
import indo from "./locales/id.json";
import { Box, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import ProductCard from "./ProductCard";

const Product = () => {
  const { translate } = useTranslate(english, indo);
  const productTop = [
    {
      img: logoClimbing,
      title: "Climbing",
    },
    {
      img: logoGolf,
      title: "Golf",
    },
    {
      img: logoSwimming,
      title: "Swimming",
    },
    {
      img: logoBowling,
      title: "Bowling",
    },
    {
      img: logoSquash,
      title: "Squash",
    },
    {
      img: logoBadminton,
      title: "Badminton",
    },
    {
      img: logoTennis,
      title: "Tennis",
    },
  ];
  const productBottom = [
    {
      img: logoFutsal,
      title: "Futsal",
    },
    {
      img: logoSoccer,
      title: "Soccer",
    },
    {
      img: logoFootball,
      title: "Football",
    },
    {
      img: logoBasketball,
      title: "Basketball",
    },
    {
      img: logoVolley,
      title: "Volley",
    },
    {
      img: logoHorse,
      title: "Horse Riding",
    },
  ];
  return (
    <div id="productPage">
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
        <div
          style={{
            marginRight: "95px",
          }}
        >
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
            </Typography>
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
        <Paper
          elevation={2}
          style={{
            marginTop: "40px",
            width: "80%",
            alignItems: "center",
            marginLeft: "10%",
            height: "100%",
          }}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "100px",
            }}
          >
            {productTop.map((e) => {
              return (
                <div
                  style={{
                    marginTop: "40px",
                  }}
                >
                  <img src={e.img} />
                  <Typography style={{textAlign:'center', fontWeight:'bold', color:'#7E7E7E', fontSize:'20px'}}>{e.title}</Typography>
                </div>
              );
            })}
          </Box>
          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "100px",
            }}
          >
            {productBottom.map((e) => {
              return (
                <div style={{
                  marginTop: "40px",
                  marginBottom:'40px'
                }}>
                  <img src={e.img} />
                  <Typography style={{textAlign:'center', fontWeight:'bold', color:'#7E7E7E', fontSize:'20px'}}>{e.title}</Typography>
                </div>
              );
            })}
          </Container>
        </Paper>
        <div className="product-card-wrapper" style={{
          marginTop:'100px'
        }}>
          <ProductCard
            src={Venue}
            title="Venue"
          >
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
              <br/>
              <br/>
              Recreational sports
              players and activists will find it easier to book sports venues or
              facilities by using the ATHLEAD INDONESIA website service.
            </Typography>
          </ProductCard>
          <ProductCard
            src={Photo}
            title="Photographer"
          >
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
              <br/>
              <br/>
              Recreational sports
              players and activists will find it easier to book sports venues or
              facilities by using the ATHLEAD INDONESIA website service.
            </Typography>
          </ProductCard>
          <ProductCard
            src={Whistle}
            title="Coach"
          >
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
              <br/>
              <br/>
              Recreational sports
              players and activists will find it easier to book sports venues or
              facilities by using the ATHLEAD INDONESIA website service.
            </Typography>
          </ProductCard>
          <ProductCard
            src={Laptop}
            title="Academy"
          >
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
              <br/>
              <br/>
              Recreational sports
              players and activists will find it easier to book sports venues or
              facilities by using the ATHLEAD INDONESIA website service.
            </Typography>
          </ProductCard>
        </div>
      </div>
    </div>
  );
};

export default Product;
