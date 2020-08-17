var food = require("../models/food")
var ingredients = require("../models/ingredients")
    //const { route } = require("./Ingredients")

var allFoods = async function(req, res) {
    try {
        var allFood = await food.find({})
        res.render("food/food", { food: allFood })
    } catch (e) {
        console.log(e)
        req.flash("error", "Somethig went wrong")
        res.redirect("/food")
    }
}

var newFood = async function(req, res) {
    try {
        var allIngredients = await ingredients.find({})
        res.render("food/newFood", { ingretients: allIngredients })
    } catch (e) {
        console.log(e)
        req.flash("error", "Somethig went wrong")
        res.redirect("/food")
    }
}

var addNewfood = async function(req, res) {
    try {
        var alling = await ingredients.find({ _id: { $in: req.body.ingredients } })
        var availableUpdate = await ingredients.update({ _id: req.body.ingredients }, { $inc: { availableQuantity: -1 } }, { "multi": true })
        var costOfP = 0
        alling.forEach(function(x) {
            costOfP = x.price + costOfP
        });

        var lot = Math.floor(Math.random() * 5000) + 1000
        var foods = { name: req.body.name, cuisine: req.body.cuisine, ingredients: req.body.ingredients, lotnumber: lot, costOfP: costOfP, sCost: costOfP + 200 }
        var createFood = await food.create(foods)
        res.redirect("/food")
    } catch (e) {
        console.log(e)
        res.redirect("/food")
        req.flash("error", "Somethig went wrong")
        res.redirect("/food")
    }
}

var editFood = async function(req, res) {
    try {
        var allFood = await food.findById(req.params.id)
        res.render("food/foodEdit", { food: allFood })

    } catch (e) {
        console.log(e)
        req.flash("error", "Somethig went wrong")
        res.redirect("/food")
    }
}

var updateFood = async function(req, res) {
    try {
        var updateFood = await food.findByIdAndUpdate(req.params.id, req.body.food)
        res.redirect("/food")
    } catch (e) {
        console.log(e)
        req.flash("error", "Somethig went wrong")
        res.redirect("/food")
    }
}

var deleteFood = async function(req, res) {
    try {
        var deleteFood = await food.findOneAndRemove(req.params.id)
        req.flash("error", "deleted")
        res.redirect("/food")
    } catch (e) {
        console.log(e)
        req.flash("error", "Somethig went wrong")
        res.redirect("/food")
    }
}
module.exports = { allFoods, newFood, addNewfood, editFood, updateFood, deleteFood }