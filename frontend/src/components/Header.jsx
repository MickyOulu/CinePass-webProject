import React from "react";
import "../style/homepage.css";
import logo from "../assets/north-star-logo.jpg";
import { FaSearch, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header-bar">
      {/* Left side logo */}
      <div className="header-left">
        <img src={logo} alt="North Star Logo" className="header-logo" />
        <span className="header-title">NORTH STAR</span>
      </div>

      {/* Right side icons */}
      <div className="header-icons">
        <FaSearch className="header-icon" />
        <FaLock
          className="header-icon"
          onClick={() => navigate("/admin/login")}
        />
      </div>
    </div>
  );
};

export default Header;
