import React from "react";
import useTranslate from "../../hooks/useTranslate";
import { Paper, Container, Grid } from "@mui/material";

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
        <Container maxWidth="md" style={{ textAlign: "center" }}>
          <Grid>
            <Grid
              item
              style={{
                fontSize: "64px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "110%",
                color: "#FEFEFE",
              }}
            >
              {translate("title")}
            </Grid>
            <Grid
              item
              style={{
                fontSize: "36px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "110%",
                color: "#A9A9A9",
              }}
            >
              {translate("description")}
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <div>
        <h3>A little story from us.</h3>
      </div>
    </div>
  );
};

export default Aboutus;
