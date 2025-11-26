const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  role: String,
  location: String,
  product: String,
  popular: Boolean
});

module.exports = mongoose.model("Location", locationSchema);