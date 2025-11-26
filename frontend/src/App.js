import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Import React Router components
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ManageShows from "./components/Manageshows/Manageshows";  // Import ManageShows component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {/* Check if the user is logged in */}
      {isLoggedIn ? (
        <Routes>
          {/* Use 'element' to pass components */}
          <Route path="/" element={<Dashboard setIsLoggedIn={setIsLoggedIn} />} /> {/* Updated Route */}
          <Route path="/manage-shows" element={<ManageShows />} />  {/* Manage Shows route */}
        </Routes>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </Router>
  );
}

export default App;
