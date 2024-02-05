const Joi = require("joi");
module.exports.munchSchema = Joi.object({
  place: Joi.object({
    title: Joi.string().required(),
    averagePrice: Joi.number().required().min(1),
    description: Joi.string().required(),
    location: Joi.string().required(),
  }).required(),
  deleteImages: Joi.array()
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    body: Joi.string().required(),
  }).required(),
});
