const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  title: String,
  averagePrice: Number,
  description: String,
  imgUrl: String,
  location: String,
});

module.exports = mongoose.model("Place", placeSchema);
