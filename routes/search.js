const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const { searchController } = require("../controllers/search");
const router = express.Router();

router.route("/").post(wrapAsync(searchController));

module.exports = router;
