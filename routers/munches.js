const express = require('express');
const router = express.Router();
const Place = require('../models/place');
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, validateMunch, isAuthor } = require('../middleware');

router.get("/", catchAsync(async (req, res) => {
      const munches = await Place.find({});
      res.render("index", { munches });
    })
  );
  
 router.get("/new", isLoggedIn, (req, res) => {
    res.render("new");
  });
  
 router.post("/", isLoggedIn, validateMunch, catchAsync(async (req, res) => {
      const place = new Place(req.body.place);
      place.author = req.user._id;
      await place.save();
      req.flash("success", "Munch Mystery Created!");
      res.redirect("/munches");
    })
  );
  
 router.get("/:id", catchAsync(async (req, res) => {
      const { id } = req.params;
      const munch = await Place.findById(id).populate({path: "reviews", populate: {path: "author"}}).populate("author");
      res.render("show", { munch });
    })
  );
  
 router.get("/:id/edit", isLoggedIn, isAuthor, catchAsync(async (req, res) => {
      const { id } = req.params;
      const munch = await Place.findById(id);
      res.render("edit", { munch });
    })
  );
  
 router.put("/:id", isLoggedIn, isAuthor, validateMunch, catchAsync(async (req, res) => {
      const { id } = req.params;
      await Place.findByIdAndUpdate(id, { ...req.body.place });
      req.flash("success", "Munch Mystery Updated!");
      res.redirect(`/munches/${id}`);
    })
  );
  
 router.delete("/:id", isLoggedIn, isAuthor, catchAsync(async (req, res) => {
      const { id } = req.params;
      await Place.findByIdAndDelete(id);
      req.flash("success", "Successfully deleted Munch Mystery!");
      res.redirect("/munches");
    })
  );

module.exports = router;