import React from "react";
import "../style/dashboard.css";
import logo from "../assets/north-star-logo.jpg";

const Dashboard = () => {
  return (
    <div className="dashboard-container">

      {/* Top Navigation */}
      <header className="dashboard-header">
        <div className="header-left">
          <img src={logo} className="header-logo" alt="North Star" />
          <div>
            <h2 className="header-title">NORTH STAR</h2>
            <p className="header-subtitle">ADMIN PORTAL</p>
          </div>
        </div>

        <button className="logout-btn">Logout</button>
      </header>

      {/* Dashboard Title */}
      <h1 className="overview-title">Dashboard Overview</h1>

      {/* 4 Main Cards */}
      <div className="card-row">

        <div className="dash-card">
          <div className="card-icon">$</div>
          <div className="card-growth green">+12%</div>
          <h2 className="card-value">€6,080</h2>
          <p className="card-label">Total Revenue</p>
        </div>

        <div className="dash-card">
          <div className="card-icon">📈</div>
          <div className="card-growth green">+8%</div>
          <h2 className="card-value">€3,820</h2>
          <p className="card-label">Today's Revenue</p>
        </div>

        <div className="dash-card">
          <div className="card-icon">👥</div>
          <div className="card-growth green">+15%</div>
          <h2 className="card-value">550</h2>
          <p className="card-label">Total Bookings</p>
        </div>

        <div className="dash-card">
          <div className="card-icon">🎬</div>
          <h2 className="card-value">3</h2>
          <p className="card-label">Active Shows</p>
        </div>

      </div>

      {/* Summary Row */}
      <div className="summary-row">

        {/* Staff Summary */}
        <div className="summary-card">
          <h3>Staff Summary</h3>
          <p>Total Staff <span className="right-number">3</span></p>
          <p>Active <span className="green right-number">3</span></p>
          <p>Inactive <span className="gray right-number">0</span></p>
        </div>

        {/* Location Performance */}
        <div className="summary-card">
          <h3>Location Performance</h3>
          <p>Helsinki Central <span className="right-number">€2,880</span></p>
          <p>Cinema Nova Oulu <span className="right-number">€2,160</span></p>
          <p>Kino Baltic Turku <span className="right-number">€1,040</span></p>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
