import React, { useState } from "react";

import { ReactComponent as ArrowUpFaq } from "assets/svg/arrow-up-faq.svg";
import { ReactComponent as ArrowDownFaq } from "assets/svg/arrow-down-faq.svg";

const FaqAccordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div>{isActive ? <ArrowUpFaq /> : <ArrowDownFaq />}</div>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
      </div>
    </div>
  );
};

export default FaqAccordion;
