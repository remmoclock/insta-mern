const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
require("dotenv").config();

app.use(cors());

const dbKey = process.env.USER_KEY



// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
  res.send("hello world");
});

app.listen(PORT, () => console.log("Server run on port " + PORT));
