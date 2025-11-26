const mongoose = require("mongoose");

const policySchema = new mongoose.Schema({
  question: String,
  answer: String
});

module.exports = mongoose.model("Policy", policySchema);