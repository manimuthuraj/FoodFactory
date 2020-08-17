var fuser = require("../models/fusers")
var bcrypt = require("bcryptjs")
var passport = require("passport")

var signupForm = function(req, res) {
    res.render("auth/signup")
}

var signUp = async function(req, res) {
    try {
        var hashedPassword = await bcrypt.hash(req.body.password, 10)
        var use = { username: req.body.username, password: hashedPassword, mail: req.body.mail }
        var eu = await fuser.create(use)
        req.flash("error", "Now Login")
        res.redirect("/login")
    } catch (e) {
        console.log(e)
        req.flash("error", "username which you gave already exist use someother name")
        res.redirect("/register")
    }
}

var loginForm = function(req, res) {
    res.render("auth/login")
}

var loginUser = passport.authenticate("local", {
    successRedirect: "/food",
    failureRedirect: "/login",
    failureFlash: true
})

var logoutUser = function(req, res) {
    req.logout();
    req.flash("error", "Loged Out successfully")
    res.redirect("/food")
}
module.exports = { signupForm, signUp, loginForm, loginForm, loginUser, logoutUser }