const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  category: String,
  shop: String,
  rating: Number,
  review: String
});

module.exports = mongoose.model("Rating", ratingSchema);