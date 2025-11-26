const Location = require("../models/Location");

exports.getLocations = async (req, res) => {
  try {
    const data = await Location.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createLocation = async (req, res) => {
  try {
    const location = await Location.create(req.body);
    res.status(201).json(location);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};