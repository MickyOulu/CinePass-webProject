const { Pool } = require("pg");  // Importing the Pool from pg
require("dotenv").config();  // Load environment variables from .env file

// Set up the connection pool using environment variables for security
const pool = new Pool({
  user: process.env.DB_USER,           // Database username (from .env)
  host: process.env.DB_HOST,           // Database host (localhost or remote)
  database: process.env.DB_NAME,       // Database name
  password: process.env.DB_PASSWORD,   // Database password (from .env)
  port: process.env.DB_PORT,           // Database port (usually 5432 for PostgreSQL)
  ssl: process.env.DB_SSL === 'true' ? true : false,  // SSL for secure connections (for production, use true)
});
pool.connect()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.error('Database connection error:', err.message);
  });
// Exporting the pool instance to use in other parts of the application
module.exports = pool;
