// @ts-nocheck
import React from "react";
import { v4 as uuidv4 } from "uuid";

import "./WorkCardStyles.css";
import ProjectCardData from "./WorkCardData";
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {ProjectCardData.map((card) => {
          return <WorkCard key={uuidv4()} card={card} />;
        })}
      </div>
    </div>
  );
};

export default Work;
