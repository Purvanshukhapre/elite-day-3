const express = require("express");
const router = express.Router();
const { getPolicies } = require("../controllers/policyController");

router.get("/", getPolicies);

module.exports = router;