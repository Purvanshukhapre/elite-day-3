const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  role: String,
  category: String,
  product: String,
  popular: Boolean
});

module.exports = mongoose.model("Category", categorySchema);