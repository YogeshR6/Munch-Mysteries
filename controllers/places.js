const { cloudinary } = require("../cloudinary");
const Place = require('../models/place');

module.exports.index = async (req, res) => {
    const places = await Place.find({});
    res.render("index", { places });
}

module.exports.renderNewForm = (req, res) => {
    res.render("new");
}

module.exports.createPlace = async (req, res, next) => {
    const place = new Place(req.body.place);
    place.images = req.files.map(f => ({ url: f.path, filename: f.filename }));
    place.author = req.user._id;
    await place.save();
    req.flash("success", "Munch Mystery Created!");
    res.redirect("/places");
}

module.exports.showPlace = async (req, res) => {
    const { id } = req.params;
    const place = await Place.findById(id).populate({path: "reviews", populate: {path: "author"}}).populate("author");
    res.render("show", { place });
}

module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const place = await Place.findById(id);
    res.render("edit", { place });
}

module.exports.updatePlace = async (req, res) => {
    const { id } = req.params;
    const place = await Place.findByIdAndUpdate(id, { ...req.body.place });
    const imgs = req.files.map(f => ({ url: f.path, filename: f.filename }));
    place.images.push(...imgs);
    await place.save();
    if (req.body.deleteImages) {
        for (let filename of req.body.deleteImages) {
            await cloudinary.uploader.destroy(filename);
        }
        await place.updateOne({ $pull: { images: { filename: { $in: req.body.deleteImages } } } })
    }
    req.flash("success", "Munch Mystery Updated!");
    res.redirect(`/places/${id}`);
}

module.exports.deletePlace = async (req, res) => {
    const { id } = req.params;
    await Place.findByIdAndDelete(id);
    req.flash("success", "Successfully deleted Munch Mystery!");
    res.redirect("/places");
}