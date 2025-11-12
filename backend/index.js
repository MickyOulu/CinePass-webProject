const express = require("express");
const app = express();
const { Pool } = require("pg");
const pool = require("./db");

const PORT = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("Hello from CinePass!");
// });

// app.listen(PORT, () => {
//   console.log("Server running on port " + PORT);
// });


app.get("/", async (req, res) => {
  try {
    // Run a simple query to check DB connection
    const result = await pool.query("SELECT 'Hello from DB' AS message");
    res.send(result.rows[0].message); // Send the DB result to the browser
  } catch (err) {
    console.error("DB connection error:", err);
    res.status(500).send("Database connection error");
  }
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});