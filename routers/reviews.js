const express = require("express");
const router = express.Router({mergeParams: true});
const Place = require("../models/place");
const Review = require("../models/review");
const catchAsync = require("../utils/catchAsync");
const { isLoggedIn, validateReview, isReviewAuthor } = require("../middleware");



router.post("/", isLoggedIn, validateReview, catchAsync(async (req, res) => {
    const place = await Place.findById(req.params.id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    place.reviews.push(review);
    await review.save();
    await place.save();
    req.flash("success", "Review Added!");
    res.redirect(`/munches/${place._id}`);
  }));
  
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, catchAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Place.findByIdAndUpdate(id, { $pull: { reviews: reviewId }});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted!");
    res.redirect(`/munches/${id}`);
  }));

module.exports = router;