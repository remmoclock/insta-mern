const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const cors = require("cors");
require("dotenv").config();

app.use(cors());

const dbKey = process.env.USER_KEY;

mongoose.connect(
  `mongodb+srv://mido:${dbKey}@cluster0.vm1nuza.mongodb.net/?retryWrites=true&w=majority`
);
mongoose.connection.on("connected", () => {
  console.log("conneted to mongo!");
});
mongoose.connection.on("error", (err) => {
  console.log("err connecting", err);
});

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
  res.send("hello world");
});

app.listen(PORT, () => console.log("Server run on port " + PORT));
