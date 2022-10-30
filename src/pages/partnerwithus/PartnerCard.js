import React from 'react'

import { ReactComponent as ArrowDown } from "assets/svg/arrow-down.svg";

function PartnerCard({ Icon, title, content }) {
  return (
    <div className='partner-card'>
      <Icon className="pcc-card" />
      <div className='pc-ctn'>
        <div className='pcc-desc'>
          <p className='pcc-title'>{title}</p>
          <div className='pcc-label-wrapper'>
            {content.map((c, k) => <span key={`ppcl-${k}`}>{c}</span>)}
          </div>
        </div>
        <div className='see-details'>
          <span>See Details<ArrowDown /></span>
        </div>
      </div>
    </div>
  )
}

export default PartnerCard