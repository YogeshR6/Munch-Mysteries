const express = require("express");
const router = express.Router({mergeParams: true});
const Place = require("../models/place");
const Review = require("../models/review");
const catchAsync = require("../utils/catchAsync");
const expressError = require("../utils/expressError");
const { reviewSchema } = require("../joischema.js");
const { isLoggedIn } = require("../middleware");

const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(",");
        throw new expressError(msg, 400);
    } else {
        next();
    }
};

router.post("/", isLoggedIn, validateReview, catchAsync(async (req, res) => {
    const place = await Place.findById(req.params.id);
    const review = new Review(req.body.review);
    place.reviews.push(review);
    await review.save();
    await place.save();
    req.flash("success", "Review Added!");
    res.redirect(`/munches/${place._id}`);
  }));
  
router.delete("/:reviewId", isLoggedIn, catchAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Place.findByIdAndUpdate(id, { $pull: { reviews: reviewId }});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted!");
    res.redirect(`/munches/${id}`);
  }));

module.exports = router;