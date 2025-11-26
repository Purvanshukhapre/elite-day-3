const express = require("express");
const router = express.Router();
const { getCategories, createCategory } = require("../controllers/categoryController");
const protect = require("../middleware/authMiddleware");

// Public route
router.get("/", getCategories);

// Protected route
router.post("/", protect, createCategory);

module.exports = router;