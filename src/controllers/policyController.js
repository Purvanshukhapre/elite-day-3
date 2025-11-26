const Policy = require("../models/Policy");

exports.getPolicies = async (req, res) => {
  try {
    const data = await Policy.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};