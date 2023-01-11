import React, { useState } from "react";

//Style
import "./style.scss";

import FloatingDot from "assets/img/floating-dot.png";
import FloatingX from "assets/img/floating-x.png";
import Facebook from "assets/img/facebook.png";
import Whatsapp from "assets/img/whatsapp.png";
import Twitter from "assets/img/twitter.png";
import Instagram from "assets/img/instagram.png";
import ColoredFacebook from "assets/img/colored-facebook.png";
import ColoredWhatsapp from "assets/img/colored-whatsapp.png";
import ColoredTwitter from "assets/img/colored-twitter.png";
import ColoredInstagram from "assets/img/colored-instagram.png";

function FloatingSosmed() {
  const [open, setOpen] = useState(false);

  const [hovered, setHovered] = useState("");

  const removeHovered = () => setHovered("");

  return (
    <div id="floating-sosmed" className={open ? "open" : ""}>
      <div className="floating-sosmed-icon-wrapper">
        <a href="https://www.facebook.com/Athlead-Indonesia-102701862716968"
              target="_blank">
          <img
            onMouseEnter={() => setHovered("fb")}
            onMouseLeave={removeHovered}
            className="floating-sosmed-icon fb"
            src={hovered == "fb" ? ColoredFacebook : Facebook}
            alt="..."
          />
        </a>
        <a href="whatsapp://send?text=Hello Athlead!&phone=+6285173394930">
          <img
            onMouseEnter={() => setHovered("wa")}
            onMouseLeave={removeHovered}
            className="floating-sosmed-icon wa"
            src={hovered == "wa" ? ColoredWhatsapp : Whatsapp}
            alt="..."
          />
        </a>
        <a href="https://twitter.com/athlead_id" target="_blank">
          <img
            onMouseEnter={() => setHovered("twit")}
            onMouseLeave={removeHovered}
            className="floating-sosmed-icon twit"
            src={hovered == "twit" ? ColoredTwitter : Twitter}
            alt="..."
          />
        </a>
        <a href="https://www.instagram.com/athlead.id/" target="_blank">
          <img
            onMouseEnter={() => setHovered("ig")}
            onMouseLeave={removeHovered}
            className="floating-sosmed-icon ig"
            src={hovered == "ig" ? ColoredInstagram : Instagram}
            alt="..."
          />
        </a>
      </div>

      <div className="floating-sosmed-toggle-icon-wrapper">
        {open ? (
          <img
            onClick={() => setOpen(false)}
            className="floating-sosmed-toggle-icon"
            src={FloatingX}
            alt="..."
          />
        ) : (
          <img
            onClick={() => setOpen(true)}
            className="floating-sosmed-toggle-icon"
            src={FloatingDot}
            alt="..."
          />
        )}
      </div>
    </div>
  );
}

export default FloatingSosmed;
