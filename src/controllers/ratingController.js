const Rating = require("../models/Rating");

exports.getRatings = async (req, res) => {
  try {
    const data = await Rating.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addRating = async (req, res) => {
  try {
    const rating = await Rating.create(req.body);
    res.status(201).json(rating);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};