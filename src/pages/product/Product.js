import React from "react";
import useTranslate from "../../hooks/useTranslate";
import banner from "../../assets/images/product-banner.png"
import title from "../../assets/images/title-product.png"

import english from "./locales/en-US.json";
import indo from "./locales/id.json";

const Product = () => {
  const { translate } = useTranslate(english, indo);

  return (
    <>
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
      <div>
        <h1>OUR PRODUCT</h1>
      </div>
    </>
  );
};

export default Product;
