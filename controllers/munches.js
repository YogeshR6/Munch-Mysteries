const Place = require('../models/place');

module.exports.index = async (req, res) => {
    const munches = await Place.find({});
    res.render("index", { munches });
}

module.exports.renderNewForm = (req, res) => {
    res.render("new");
}

module.exports.createMunch = async (req, res) => {
    const place = new Place(req.body.place);
    place.author = req.user._id;
    await place.save();
    req.flash("success", "Munch Mystery Created!");
    res.redirect("/munches");
}

module.exports.showMunch = async (req, res) => {
    const { id } = req.params;
    const munch = await Place.findById(id).populate({path: "reviews", populate: {path: "author"}}).populate("author");
    res.render("show", { munch });
}

module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const munch = await Place.findById(id);
    res.render("edit", { munch });
}

module.exports.updateMunch = async (req, res) => {
    const { id } = req.params;
    await Place.findByIdAndUpdate(id, { ...req.body.place });
    req.flash("success", "Munch Mystery Updated!");
    res.redirect(`/munches/${id}`);
}

module.exports.deleteMunch = async (req, res) => {
    const { id } = req.params;
    await Place.findByIdAndDelete(id);
    req.flash("success", "Successfully deleted Munch Mystery!");
    res.redirect("/munches");
}