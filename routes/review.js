const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const {
  isLoggedIn,
  isReviewAuthor,
  validateReview,
} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

//Reviews
//Post route
router.post(
  "/",
  validateReview,
  isLoggedIn,
  wrapAsync(reviewController.createReview)
);

//delete review route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;
