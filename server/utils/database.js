const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const findUser = async (username) => {
  const [rows] = await pool.promise().query(
    "SELECT Password FROM Users WHERE BINARY username = ?",
    [username]
  );
  return rows;
};

module.exports = { pool, findUser };
