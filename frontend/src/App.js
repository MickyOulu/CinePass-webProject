import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>

        {/* LOGIN PAGE */}
        <Route
          path="/"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />

        {/* DASHBOARD PAGE */}
        <Route
          path="/admin/dashboard"
          element={<Dashboard setIsLoggedIn={setIsLoggedIn} />}
        />

      </Routes>
    </Router>
  );
}

export default App;
