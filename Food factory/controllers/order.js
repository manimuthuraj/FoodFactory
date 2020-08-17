var food = require("../models/food")
var fuser = require("../models/fusers")
var order = require("../models/orders")

var userOrder = async function(req, res) {
    try {
        var foods = await food.findById(req.params.id)
        res.render("order/neworder", { food: foods })
    } catch (e) {
        console.log(e)
        req.flash("error", "Somethig went wrong")
        res.redirect("/food")
    }
}

var createOrder = async function(req, res) {
    try {
        var foods = await food.findById(req.params.id)
        var price = foods.sCost
        totalprice = foods.sCost * req.body.noi
        var d = new Date();
        d.setHours(d.getHours() + 2);
        var orders = { name: foods.name, moT: req.body.moT, noItems: req.body.noi, totalprice: totalprice, status: req.body.status, doD: d, user: req.user._id, food: foods._id, price: price }
        var createOrder = await order.create(orders)
        res.redirect("/food")
    } catch (e) {
        console.log(e)
        req.flash("error", "Somethig went wrong")
        res.redirect("/food")
    }
}

var editOrder = async function(req, res) {
    try {
        var orders = await order.findById(req.params.id)
        res.render("order/editorder", { orders: orders })

    } catch (e) {
        console.log(e)
        req.flash("error", "Somethig went wrong")
        res.redirect("/food")
    }
}

var updateOrder = async function(req, res) {
    try {
        var orders = await order.findById(req.params.id)
        var totalprice = orders.price * req.body.order.noItems
        req.body.order.totalprice = totalprice
        console.log(updateorder)
        res.redirect("/user")
    } catch (e) {
        console.log(e)
        req.flash("error", "Somethig went wrong")
        res.redirect("/food")
    }
}

var deleteOrder = async function(req, res) {
    try {
        var deleteOrder = await order.findOneAndRemove(req.params.id)
        res.redirect("/food")
    } catch (e) {
        console.log(e)
        req.flash("error", "Somethig went wrong")
        res.redirect("/food")
    }
}
module.exports = { userOrder, createOrder, editOrder, updateOrder, deleteOrder }