const express = require("express");
const router = express.Router();
const { getLocations, createLocation } = require("../controllers/locationController");
const protect = require("../middleware/authMiddleware");

router.get("/", getLocations);
router.post("/", protect , createLocation);

module.exports = router;