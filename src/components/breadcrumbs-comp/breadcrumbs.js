import { FiberManualRecord } from "@mui/icons-material";
import { Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./style-index.scss";

export default function BreadcrumbsComp(props) {
  const page = props.page;
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      to="/"
      className="link-home"
      // onClick={handleClick}
    >
      <Typography variant="h6" className="link-text">
        Home
      </Typography>
    </Link>,
    <Typography
      key="3"
      sx={{
        color: "#F8B9BF",
        fontWeight: 800,
      }}
      variant="h6"
    >
      {page}
    </Typography>,
  ];
  return (
    <div id="breadcrumbsComp">
      <Breadcrumbs
        separator={<FiberManualRecord fontSize="5px" sx={{ color: "white" }} />}
      >
        {breadcrumbs}
      </Breadcrumbs>
    </div>
  );
}
