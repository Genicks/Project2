const express = require("express");
const router = express.Router();
const { valid } = require("../utils/validation");

router.get("/", (req, res) => {
  res.send("Hello From login route!");
});

router.post("/", async (req, res) => {
  const response = await valid(req.body.Username, req.body.Password);
  if (response) {
    res.send("Valid Credentials \n Login Successful!");
  } else {
    res.send("Invalid Credentials!");
  }
});

module.exports = router;
