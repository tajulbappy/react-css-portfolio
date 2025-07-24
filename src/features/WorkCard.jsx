// @ts-nocheck
import React from "react";

import "./WorkCardStyles.css";
import { NavLink } from "react-router-dom";

const WorkCard = ({ card }) => {
    const { imgsrc, title, desc, view } = card;
  return (
    <div className="project-card">
      <img src={imgsrc} alt="project-image" />
          <h2 className="project-title">{title}</h2>
      <div className="pro-details">
              <p>{desc}</p>

        <div className="pro-btns">
          <NavLink to={view} className="btn">
            View
          </NavLink>
          <NavLink to={view} className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
