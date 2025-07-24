// @ts-nocheck
import React from "react";
import { Link } from "react-router-dom";

import "./AboutContentStyles.css";
import react1 from "../assets/react/react6.jpg";
import react2 from "../assets/react/react1.jpg";
import myself from "../assets/myself7.jpg"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="myself">
        <img className="tajul" src={myself} alt="react-image" />
      </div>
      <div className="about-left">
        <h1>Who Am I ?</h1>
        <p>
          I'm a react front-end developer.I create responsive secure websites
          for my clients.
        </p>
        <Link to="/contact">
          <button className="btn">CONTACT</button>
        </Link>
      </div>
      <div className="about-right">
        <div className="img-container">
          <div className="img-stack top">
            <img className="img" src={react1} alt="react-image" />
          </div>
          <div className="img-stack bottom">
            <img className="img" src={react2} alt="react-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
