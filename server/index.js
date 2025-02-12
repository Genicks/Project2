const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const corsOptions = {
  origin: "http://example.com",
  methods: "GET,POST",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
