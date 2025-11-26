const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  title: String,
  description: String
});

module.exports = mongoose.model("Report", reportSchema);