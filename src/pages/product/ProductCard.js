import React, { useState } from "react";
import { ReactComponent as ArrowRight } from "assets/svg/arrow-right.svg";

function ProductCard({ src, title, text, children, lebar }) {
  const isResponsive = window.innerWidth <= 400;

  return (
    <div className="product-card" 
    style={{
      height:lebar
    }}
    >
      <div className="pc-icn-wrapper">
        {/* <p>{width}</p> */}
        <img src={src} className="pc-icon" alt="..." />
      </div>
      <div className="pc-ctn">
        <div className="pcc-tw">
          <p className="pc-title">{title}</p>
          <p className="pc-text">{text}</p>
          {children}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
