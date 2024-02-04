const User = require("../models/user.js");

module.exports.renderRegister = (req, res) => {
    res.render("users/register");
}

module.exports.registerUser = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash("success", "Welcome to Munch Mysteries!");
            res.redirect("/munches");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/register");
    }
}

module.exports.renderLogin = (req, res) => {
    res.render("users/login");
}

module.exports.loginUser = (req, res) => {
    req.flash("success", "Welcome back!");
    const redirectUrl = req.session.returnTo ? req.session.returnTo : "/munches";
    delete req.session.returnTo;
    res.redirect(redirectUrl);
}

module.exports.logoutUser = (req, res) => {
    req.logout(function(err){
        if (err) return next(err);
        req.flash("success", "Goodbye!");
        res.redirect("/munches");
    });
}