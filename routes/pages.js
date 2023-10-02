const express = require("express");
const router = express.Router();
const auth_middle = require("../middleware/auth_middle");

router.get(["/", "/login"], (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/profile", auth_middle, (req, res) => {
  res.render("profile", (user = req.user));
});

module.exports = router;
