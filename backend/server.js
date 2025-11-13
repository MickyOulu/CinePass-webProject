const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");

const app = express();

// CORS
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3002",
      "http://localhost:3003",
      "https://cinepass-h6f0f2b9grf9cwen.swedencentral-01.azurewebsites.net"
    ],
    methods: ["GET", "POST"],
    credentials: true
  })
);

app.use(express.json());

// ROUTES
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Backend running at http://localhost:${PORT}`);
});
