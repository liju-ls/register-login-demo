const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

router.post("/register", async (req, res) => {
  await userModel
    .findOne({ email: req.body.email })
    .then(async (data) => {
      if (data == null) {
        await bcrypt.hash(req.body.password, 8).then(async (hashed) => {
          const user = new userModel({
            username: req.body.username,
            email: req.body.email,
            password: hashed,
          });

          await user
            .save()
            .then(() => {
              res.render("register", {
                warning: "Account created sucessfully.",
              });
            })
            .catch((err) => {
              console.log(err);
            });
        });
      } else {
        return res.render("register", { warning: "Email already found." });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/login", async (req, res) => {
  await userModel
    .findOne({ email: req.body.email })
    .then(async (data) => {
      if (data !== null) {
        await bcrypt
          .compare(req.body.password, data.password)
          .then((result) => {
            if (result == true) {
              const token = generateToken(data._id.toJSON());
              return res.cookie("token", token).redirect("/profile");
            } else {
              return res.render("login", { warning: "Invalid password." });
            }
          });
      } else {
        res.render("login", { warning: "Invalid email." });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/logout", async (req, res) => {
  res.clearCookie("token").redirect("/login");
});

function generateToken(data) {
  return jwt.sign(data, process.env.JWT_KEY);
}

module.exports = router;
