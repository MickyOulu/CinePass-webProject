import React from "react";
import "../style/login.css";
import logo from "../assets/north-star-logo.jpg";

const Login = () => {
  return (
    <div className="page-background">
      <div className="login-card">

        {/* Logo + Title */}
        <div className="logo-section">
          <div className="logo-glow">
            <img src={logo} alt="North Star Logo" className="logo-img" />
          </div>
          <div className="logo-texts">
            <h1 className="northstar-title">NORTH STAR</h1>
            <p className="booking-text">BOOKING</p>
          </div>
        </div>

        {/* Lock Icon (UPDATED) */}
        <div className="lock-box">
          <div className="lock-circle">
            <span className="lock-symbol">🔒</span>
          </div>
        </div>

        {/* Titles */}
        <h2 className="main-title">Admin Portal</h2>
        <p className="subtitle">Secure access to North Star Booking management</p>

        {/* Email */}
        <div className="input-group">
          <label>Email / Username</label>
          <div className="input-wrapper">
            <span className="input-icon">📧</span>
            <input type="text" placeholder="admin@northstar.com" />
          </div>
        </div>

        {/* Password */}
        <div className="input-group">
          <label>Password</label>
          <div className="input-wrapper">
            <span className="input-icon">🔒</span>
            <input type="password" placeholder="Enter your password" />
            <span className="eye-icon">👁️</span>
          </div>
        </div>

        {/* Forgot */}
        <div className="forgot-text">Forgot password?</div>

        {/* Button */}
        <button className="login-btn">Login to Dashboard</button>

        {/* Demo box */}
        <div className="demo-box">
          <h4>Demo Credentials</h4>
          <p>Email: <strong>admin@northstar.com</strong></p>
          <p>Password: <strong>admin123</strong></p>
        </div>

        {/* Footer */}
        <footer className="footer">
          © 2024 North Star Booking. All rights reserved.
        </footer>

      </div>
    </div>
  );
};

export default Login;
