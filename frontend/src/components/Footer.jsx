import React from "react";
import "../style/homepage.css";
import logo from "../assets/north-star-logo.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo-box">
        <img src={logo} alt="North Star" className="footer-logo" />
        <p className="footer-tagline">Premium cinema experience across Finland</p>
      </div>

      <div className="footer-columns">
        <div>
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>Shows</p>
          <p>Locations</p>
          <p>About Us</p>
        </div>

        <div>
          <h4>Information</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>FAQs</p>
          <p>Help Center</p>
        </div>

        <div>
          <h4>Contact Us</h4>
          <p>Email: info@northstar.com</p>
          <p>+358 800 123 456</p>
        </div>
      </div>

      <p className="copyright">© 2025 North Star Booking. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
