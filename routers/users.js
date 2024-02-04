const express = require("express");
const router = express.Router();
const passport = require("passport");
const catchAsync = require("../utils/catchAsync.js");
const user = require("../controllers/users.js");

router.route("/register")
    .get(user.renderRegister)
    .post(catchAsync(user.registerUser));

router.route("/login")
    .get(user.renderLogin)
    .post(passport.authenticate("local", { failureFlash: true, failureRedirect: "/login", keepSessionInfo: true }), user.loginUser);

router.get("/logout", user.logoutUser);

module.exports = router;