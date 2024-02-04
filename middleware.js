const Munch = require('./models/place');
const Review = require('./models/review');
const expressError = require('./utils/expressError');
const { munchSchema } = require('./joischema.js');
const { reviewSchema } = require("./joischema.js");

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl;
        req.flash('error', 'You must be signed in first!');
        return res.redirect('/login');
    }
    next();
}

module.exports.validateMunch = (req, res, next) => {
    const { error } = munchSchema.validate(req.body);
    if (error) {
      const msg = error.details.map(el => el.message).join(',');
      throw new expressError(msg, 400);
    } else {
      next();
    }
};

module.exports.isAuthor = async (req, res, next) => {
    const { id } = req.params;
    const place = await Munch.findById(id);
    if (!place.author.equals(req.user._id)) {
        req.flash('error', 'You do not have permission to do that!');
        return res.redirect(`/munches/${id}`);
    }
    next();
};

module.exports.isReviewAuthor = async (req, res, next) => {
    const { id, reviewId } = req.params;
    const review = await Review.findById(reviewId);
    if (!review.author.equals(req.user._id)) {
        req.flash('error', 'You do not have permission to do that!');
        return res.redirect(`/munches/${id}`);
    }
    next();
};

module.exports.validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(",");
        throw new expressError(msg, 400);
    } else {
        next();
    }
};
