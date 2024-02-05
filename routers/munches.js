const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, validateMunch, isAuthor } = require('../middleware');
const munches = require('../controllers/munches');
const multer  = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

router.route("/")
    .get(catchAsync(munches.index))
    .post( isLoggedIn, upload.array('image'), validateMunch, catchAsync(munches.createMunch));

router.get("/new", isLoggedIn, munches.renderNewForm);
  
router.route("/:id")
    .get(catchAsync(munches.showMunch))
    .put(isLoggedIn, isAuthor, upload.array('image'), validateMunch, catchAsync(munches.updateMunch))
    .delete(isLoggedIn, isAuthor, catchAsync(munches.deleteMunch));  

router.get("/:id/edit", isLoggedIn, isAuthor, catchAsync(munches.renderEditForm));
  
module.exports = router;