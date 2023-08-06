import React from "react";
import './Footer.css'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaPinterest, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>123, Housing Society</p>
              <p>Banglore.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            +91 7009027408 
            </h4>
          </div>
          <div className="email">
            <h4>  
            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
             muskanmittal848@gmail.com 
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About the company</h4>
          <p>Currently a frontend developer at industry buying and in search of new opportunities so that i can get rid of this fucking company</p>
          <div className="social">
          <FaFacebook size={20} style={{ color: "#fff", marginRight: "2rem" }} />
          <FaTwitter size={20} style={{ color: "#fff", marginRight: "2rem" }} />
          <FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} />
          <FaPinterest size={20} style={{ color: "#fff", marginRight: "2rem" }} />
          <FaInstagram size={20} style={{ color: "#fff", marginRight: "2rem" }} />

          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
