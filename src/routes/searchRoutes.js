const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const { search, recentSearches } = require("../controllers/searchController");

router.get("/", protect, search);
router.get("/recent", protect, recentSearches);

module.exports = router;