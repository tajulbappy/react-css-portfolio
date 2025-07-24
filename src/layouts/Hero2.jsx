import React from "react";

import "./Hero2Styles.css";
// import hero2 from "../assets/project2.webp";

const Hero2 = ({heading,text}) => {
  return (
      <div className="hero2">
          <div className="heading">
              <h1>{heading}</h1>
              <p>{text}</p>
          </div>
      
    </div>
  );
};

export default Hero2;
