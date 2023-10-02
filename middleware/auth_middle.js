const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

async function auth(req, res, next) {
  if ("token" in req.cookies) {
    const token = req.cookies["token"];
    try {
      jwt.verify(token, process.env.JWT_KEY);
      const userId = jwt.decode(token, process.env.JWT_KEY);
      await userModel
        .findOne({ _id: userId })
        .then((data) => {
          req.user = data;
        })
        .catch((err) => [console.log(err)]);
      return next();
    } catch (error) {
      return res.redirect("/login");
    }
  } else {
    return res.redirect("/login");
  }
}

module.exports = auth;
