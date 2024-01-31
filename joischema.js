const Joi = require("joi");
module.exports.munchSchema = Joi.object({
  place: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
  }).required(),
});
