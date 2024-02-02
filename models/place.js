const mongoose = require("mongoose");
const Review = require("./review");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  title: String,
  averagePrice: Number,
  description: String,
  imgUrl: String,
  location: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review"
    }
  ]
});

placeSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    await Review.deleteMany({
      _id: {
        $in: doc.reviews
      }
    });
  }
});

module.exports = mongoose.model("Place", placeSchema);
