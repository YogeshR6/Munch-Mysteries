const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Place = require("./models/place");
const methodOverride = require("method-override");
const engine = require("ejs-mate");
const { munchSchema } = require("./joischema.js");
const catchAsync = require("./utils/catchAsync.js");
const expressError = require("./utils/expressError.js");

mongoose
  .connect("mongodb://127.0.0.1:27017/Munch-Mysteries")
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => {
    console.error("Could not connect to MongoDB...", err);
  });

const app = express();

app.engine("ejs", engine);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const validateMunch = (req, res, next) => {
  const { error } = munchSchema.validate(req.body);
  if (error) {
    const msg = error.details.map(el => el.message).join(",");
    throw new expressError(msg, 400);
  } else {
    next();
  }
};

app.get(
  "/munches", validateMunch, catchAsync(async (req, res) => {
    const munches = await Place.find({});
    res.render("index", { munches });
  })
);

app.get("/munches/new", (req, res) => {
  res.render("new");
});

app.post(
  "/munches", validateMunch,
  catchAsync(async (req, res) => {
    const place = new Place(req.body.place);
    await place.save();
    res.redirect("/munches");
  })
);

app.get(
  "/munches/:id", validateMunch,
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const munch = await Place.findById(id);
    res.render("show", { munch });
  })
);

app.get(
  "/munches/:id/edit", validateMunch,
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const munch = await Place.findById(id);
    res.render("edit", { munch });
  })
);

app.put(
  "/munches/:id", validateMunch,
  catchAsync(async (req, res) => {
    const { id } = req.params;
    await Place.findByIdAndUpdate(id, { ...req.body.place });
    res.redirect(`/munches/${id}`);
  })
);

app.delete(
  "/munches/:id", validateMunch,
  catchAsync(async (req, res) => {
    const { id } = req.params;
    await Place.findByIdAndDelete(id);
    res.redirect("/munches");
  })
);

app.get("/", (req, res) => {
  res.redirect("/munches");
});

app.all("*", (req, res, next) => {
  next(new expressError("Page Not Found!", 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if(!err.message) err.message = "Something went wrong!"; 
  res.status(statusCode).render("error", { err });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
