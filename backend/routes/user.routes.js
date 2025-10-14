const express = require("express");
const router = express.Router();
const { register } = require("../controllers/auth.controller");
const { login } = require("../controllers/auth.controller");

// Register endpoint

router.get("/", (req, res) => {
  res.send("User route is working");
});

router.post("/register", register);
router.post("/login", login);

module.exports = router;
