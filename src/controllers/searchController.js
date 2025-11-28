const Category = require("../models/Category");
const Location = require("../models/Location");
const Rating = require("../models/Rating");
const SearchHistory = require("../models/SearchHistory");

// MAIN SEARCH API
exports.search = async (req, res) => {
  try {
    const { keyword } = req.query;
    const userId = req.user._id; // Coming from JWT middleware

    if (!keyword) {
      return res.status(400).json({ message: "Keyword is required" });
    }

    // Save search history
    await SearchHistory.create({
      userId,
      keyword
    });

    // Search in categories
    const categories = await Category.find({
      $or: [
        { category: { $regex: keyword, $options: "i" } },
        { product: { $regex: keyword, $options: "i" } }
      ]
    });

    // Search in locations
    const locations = await Location.find({
      $or: [
        { location: { $regex: keyword, $options: "i" } },
        { product: { $regex: keyword, $options: "i" } }
      ]
    });

    // Search in ratings
    const ratings = await Rating.find({
      $or: [
        { item: { $regex: keyword, $options: "i" } },
        { shop: { $regex: keyword, $options: "i" } }
      ]
    });

    res.json({
      keyword,
      results: {
        categories,
        locations,
        ratings,
      }
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// GET LAST 3 SEARCHES
exports.recentSearches = async (req, res) => {
  try {
    const userId = req.user._id;

    const searches = await SearchHistory.find({ userId })
      .sort({ createdAt: -1 })
      .limit(3);

    res.json(searches);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
