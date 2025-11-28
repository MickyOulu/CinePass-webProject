import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// MAIN PAGES
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

// MANAGE SHOWS (folder + file)
import ManageShows from "./components/Manageshows/Manageshows";

function App() {

  return (
    <Router>
      <Routes>

        {/* USER HOME PAGE */}
        <Route path="/" element={<HomePage />} />

        {/* ADMIN LOGIN PAGE */}
        <Route path="/admin/login" element={<Login />} />

        {/* ADMIN DASHBOARD */}
        <Route path="/admin/dashboard" element={<Dashboard />} />

        {/* MANAGE SHOWS PAGE */}
        <Route path="/admin/shows" element={<ManageShows />} />

      </Routes>
    </Router>
  );
}

export default App;
