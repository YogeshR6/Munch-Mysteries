const express = require('express');
const router = express.Router();
const Place = require('../models/place');
const catchAsync = require('../utils/catchAsync');
const { munchSchema } = require('../joischema.js');
const expressError = require('../utils/expressError');

const validateMunch = (req, res, next) => {
  const { error } = munchSchema.validate(req.body);
  if (error) {
    const msg = error.details.map(el => el.message).join(',');
    throw new expressError(msg, 400);
  } else {
    next();
  }
};

router.get("/", catchAsync(async (req, res) => {
      const munches = await Place.find({});
      res.render("index", { munches });
    })
  );
  
 router.get("/new", (req, res) => {
    res.render("new");
  });
  
 router.post("/", validateMunch, catchAsync(async (req, res) => {
      const place = new Place(req.body.place);
      await place.save();
      res.redirect("/munches");
    })
  );
  
 router.get("/:id", catchAsync(async (req, res) => {
      const { id } = req.params;
      const munch = await Place.findById(id).populate("reviews");
      res.render("show", { munch });
    })
  );
  
 router.get("/:id/edit", catchAsync(async (req, res) => {
      const { id } = req.params;
      const munch = await Place.findById(id);
      res.render("edit", { munch });
    })
  );
  
 router.put("/:id", validateMunch, catchAsync(async (req, res) => {
      const { id } = req.params;
      await Place.findByIdAndUpdate(id, { ...req.body.place });
      res.redirect(`/munches/${id}`);
    })
  );
  
 router.delete("/:id", catchAsync(async (req, res) => {
      const { id } = req.params;
      await Place.findByIdAndDelete(id);
      res.redirect("/munches");
    })
  );

module.exports = router;