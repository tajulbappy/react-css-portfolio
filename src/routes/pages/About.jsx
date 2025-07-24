import React from "react";
import NavBar from "../../layouts/NavBar";
import Footer from "../../layouts/Footer";
import Hero2 from "../../layouts/Hero2";
import AboutContent from "../../features/AboutContent";


const About = () => {
  return (
    <div>
      <NavBar />
      <Hero2 heading="ABOUT." text="I'm a passionate Front-End Developer." />
      <AboutContent/>
      <Footer />
    </div>
  );
};

export default About;
