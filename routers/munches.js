const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, validateMunch, isAuthor } = require('../middleware');
const munches = require('../controllers/munches');

router.route("/")
    .get(catchAsync(munches.index))
    .post( isLoggedIn, validateMunch, catchAsync(munches.createMunch));

router.get("/new", isLoggedIn, munches.renderNewForm);
  
router.route("/:id")
    .get(catchAsync(munches.showMunch))
    .put(isLoggedIn, isAuthor, validateMunch, catchAsync(munches.updateMunch))
    .delete(isLoggedIn, isAuthor, catchAsync(munches.deleteMunch));  

router.get("/:id/edit", isLoggedIn, isAuthor, catchAsync(munches.renderEditForm));
  
module.exports = router;