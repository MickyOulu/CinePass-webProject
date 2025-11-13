const pool = require("../db");

const loginController = async (req, res) => {
  console.log("Login request body:", req.body);

  const { username, password } = req.body;

  try {
    const result = await pool.query(
      "SELECT * FROM admin_users WHERE username=$1 AND password=$2",
      [username, password]
    );

    console.log("Database result:", result.rows);

    if (result.rows.length > 0) {
      return res.json({
        success: true,
        message: "Login successful!"
      });
    } else {
      return res.json({
        success: false,
        message: "Invalid username or password"
      });
    }
  } catch (err) {
    console.error("Login Error:", err);
    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

module.exports = { loginController };
