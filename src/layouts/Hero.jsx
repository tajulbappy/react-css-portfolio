// @ts-nocheck
import React from "react";

import "./HeroStyles.css";
import heroImg from "../assets/hero.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="hero-img" src={heroImg} alt="hero-image" />
      </div>
      <div className="hero-content">
        <p>Hi, I'm a FreeLancer.</p>
        <h1>React JS Developer.</h1>
        <div className="btns">
          <Link to="/project" className="btn">
            PROJECTS
          </Link>
          <Link to="/contact" className="btn-light">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
