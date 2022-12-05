import { useState } from "react";

import { ReactComponent as ArrowDown } from "assets/svg/arrow-down.svg";
import Checklist from "assets/img/red-check.png";
import { Accordion } from "@mui/material";

function PartnerCard({ Icon, title, content, desc, points }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`partner-card ${open ? "open" : ""}`}>
      <Icon className="pcc-card" />
      <div className="pc-ctn">
        <div className="pcc-desc">
          <p className="pcc-title">{title}</p>
          <div className="pcc-label-wrapper">
            {content.map((c, k) => (
              <span key={`ppcl-${k}`}>{c}</span>
            ))}
          </div>
        </div>
        <div className="partner-card-list">
          {open && (
            <div className="pcl-1">
              <p className="pcl1-desc">{desc}</p>
              <div className="pcl1-points-wrapper">
                {points?.map((p, key) => {
                  return (
                    <p className="pcl1-point" key={`pc-points-${key}`}>
                      <img src={Checklist} alt="..." /> {p}
                    </p>
                  );
                })}
              </div>
            </div>
          )}
          <div className="see-details" onClick={() => setOpen(!open)}>
            <span>
              {open ? "Hide" : "See"} Details
              <ArrowDown />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerCard;
