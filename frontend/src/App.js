import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* HOMEPAGE */}
        <Route path="/" element={<HomePage />} />

        {/* LOGIN PAGE */}
        <Route path="/login" element={<Login />} />

        {/* ADMIN DASHBOARD */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
