const mongoose = require("mongoose");
require("dotenv").config();
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const userModel = mongoose.model(process.env.DB_COLLECTION, userSchema);

module.exports = userModel;
