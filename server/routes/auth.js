const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello home route");
});

router.post("/signup", (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    return res.json({ error: "please add all the fields" });
  }
  return res.status(422).json({ message: "succes posted" });
});

module.exports = router;
