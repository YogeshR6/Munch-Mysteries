const Joi = require("joi");
module.exports.munchSchema = Joi.object({
  place: Joi.object({
    imgUrl: Joi.string().required(),
    title: Joi.string().required(),
    averagePrice: Joi.number().required().min(1),
    description: Joi.string().required(),
    location: Joi.string().required(),
  }).required(),
});
