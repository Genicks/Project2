const express = require("express");
require("dotenv").config();
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
const { pool } = require("./utils/database");
const login = require("./routes/login");

app.use(cors());

const port = process.env.PORT || 3000;

const corsOptions = {
  origin: process.env.FE_ORIGIN,
  methods: "GET,POST",
  allowedHeaders: "Content-Type,Authorization",
};
app.use(cors(corsOptions));

app.use("/login", login);

app.get("/", (req, res) => {
  pool.query("SELECT * FROM Users", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
