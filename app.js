const express = require("express");
const app = express();
const pagesRoute = require("./routes/pages");
const auth = require("./routes/auth");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const pug = require("pug");
const path = require("path");

require("dotenv").config();

try {
  mongoose.connect(`${process.env.DB_URL}${process.env.DB_NAME}`);
  console.log("MongoDB connected.");
} catch (err) {
  console.log(err);
}

app.set("view engine", "pug");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./public")));

app.use("/", pagesRoute);
app.use("/auth", auth);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
