import React from "react";

import "./FooterStyles.css";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="address">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>53/A, Shahibagh Society, Savar, Dhaka,</p>
              <p>Bangladesh.</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />{" "}
              +880-1912-394593
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              bappy042@gmail.com
            </h4>
          </div>
        </div>

        <div className="footer-right">
          <h4>About the company</h4>
          <p>
            This is me Tajul Islam, CEO & Founder of TechCreative. I enjoy
            discussing new projects and design challenges.
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
