import React from 'react'

import { ReactComponent as ArrowRight } from "assets/svg/arrow-right.svg";
import useTranslate from "hooks/useTranslate";
import english from "./locales/en-US.json";
import indo from "./locales/id.json";


function ProductCard({ src, title, text}) {
  const { translate } = useTranslate(english, indo);

  return (
    <div className='product-card'>
      <div className='pc-icn-wrapper'>
        <img src={src} className="pc-icon" alt='...' />
      </div>
      <div className='pc-ctn'>
        <div className='pcc-tw'>
          <p className='pc-title'>{title}</p>
          <p className='pc-text'>{text}</p>
        </div>

        <div>
          <button className='pc-partner'>
            <span>{translate("n23")}</span>
            <ArrowRight />
          </button>
          <a className='learn-more'><span>{translate("n24")}</span> <ArrowRight /></a>
        </div>
      </div>
    </div>
  )
}

export default ProductCard