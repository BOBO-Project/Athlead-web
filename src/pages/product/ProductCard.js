import React from "react";
import { ReactComponent as ArrowRight } from "assets/svg/arrow-right.svg";

function ProductCard({ src, title, text, children }) {
  return (
    <div className="product-card">
      <div className="pc-icn-wrapper">
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
