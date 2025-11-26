const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const showRoutes = require("./routes/showRoutes");

const app = express();

// CORS (LOCAL)
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3002",
      "http://localhost:3003"
    ],
    methods: ["GET", "POST"],
    credentials: true
  })
);

app.use(express.json());

// ROUTES
app.use("/auth", authRoutes);
app.use("/api/shows", showRoutes);

const PORT = process.env.PORT || 5000;  // <-- Use 5000, not 3000
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
