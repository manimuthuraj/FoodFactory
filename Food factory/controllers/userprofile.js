var fuser = require("../models/fusers")
var bcrypt = require("bcryptjs")
var passport = require("passport")
var order = require("../models/orders")


var userProfile = async function(req, res) {
    try {
        var orders = await order.find({ user: req.user._id })
        var subtotals = 0
        orders.forEach(function(x) {
            subtotals = subtotals + x.totalprice
        })
        res.render("userprofile/profile", { orders: orders, subtotals: subtotals })
    } catch (e) {
        console.log(e)
        req.flash("error", "Somethig went wrong")
        res.redirect("/food")
    }
}

var changeUserpassword = async function(req, res) {
    try {
        var oldPassword = await fuser.findById(req.user._id)
        if (await bcrypt.compare(req.body.user, oldPassword.password)) {
            var hashedPassword = await bcrypt.hash(req.body.newuser, 10)
            var newu = await fuser.findByIdAndUpdate(req.user._id, { "password": hashedPassword })
            req.flash("error", "Password changed successfully")
            res.redirect("/food")
        } else {
            req.flash("error", "current password is worng")
            res.redirect("/user")
        }
    } catch (e) {
        console.log(e)
        req.flash("error", "Something went worng")
        res.redirect("/user")
    }
}
module.exports = { userProfile, changeUserpassword }