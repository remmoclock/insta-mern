const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const path = require("path");
const cors = require("cors");
require("dotenv").config();
require("./models/user");
require("./models/post");

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

app.use(express.static(path.join(__dirname + "/public")));
app.use(cors());
app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/post"));
app.use(require("./routes/user"));

app.listen(PORT, () => console.log("Server run on port " + PORT));
