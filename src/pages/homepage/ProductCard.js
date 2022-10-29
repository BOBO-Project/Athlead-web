import React from 'react'

import { ReactComponent as ArrowRight } from "assets/svg/arrow-right.svg";


function ProductCard({ src, title, text }) {
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
            <span>Partner With Us</span>
            <ArrowRight />
          </button>
          <a className='learn-more'><span>Learn More</span> <ArrowRight /></a>
        </div>
      </div>
    </div>
  )
}

export default ProductCard