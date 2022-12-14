import React, { useState } from 'react'

//Style
import "./style.scss"

import FloatingDot from "assets/img/floating-dot.png";
import FloatingX from "assets/img/floating-x.png";
import Facebook from "assets/img/facebook.png";
import Whatsapp from "assets/img/whatsapp.png";
import Twitter from "assets/img/twitter.png";
import Instagram from "assets/img/instagram.png";

function FloatingSosmed() {
  const [open, setOpen] = useState(false)

  return (
    <div id='floating-sosmed' className={open ? "open" : ""}>
      <div className='floating-sosmed-icon-wrapper'>
        <img className='floating-sosmed-icon fb' src={Facebook} alt="..." />
        <img className='floating-sosmed-icon wa' src={Whatsapp} alt="..." />
        <img className='floating-sosmed-icon twit' src={Twitter} alt="..." />
        <img className='floating-sosmed-icon ig' src={Instagram} alt="..." />
      </div>

      <div className='floating-sosmed-toggle-icon-wrapper'>
        {open ?
          <img onClick={() => setOpen(false)} className='floating-sosmed-toggle-icon' src={FloatingX} alt="..." />
          :
          <img onClick={() => setOpen(true)} className='floating-sosmed-toggle-icon' src={FloatingDot} alt="..." />
        }
      </div>
    </div>
  )
}

export default FloatingSosmed