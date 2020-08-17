const ingredients = require("../models/ingredients")

var displayIngredients = async function(req, res) {
    try {
        var Ingredient = await ingredients.find({})
        res.render("Ingredients/Ingredients", { Ingredients: Ingredient })
    } catch (e) {
        console.log(e)
    }
}

var newIngredientsform = function(req, res) {
    res.render("Ingredients/newIngredients")
}

var addnewIngredients = async function(req, res) {
    try {
        var lot = Math.floor(Math.random() * 5000) + 1000
        var Ingredients = { name: req.body.name, lotnumber: lot, availableQuantity: req.body.aquantity, thresholdQuantity: req.body.tquantity, price: req.body.price, vendorName: req.body.vname, vendorEmail: req.body.vemail }
        var ing = await ingredients.create(Ingredients)
        res.redirect("/ingredients")
    } catch (e) {
        console.log(e)
        req.flash("error", "Somethig went wrong")
        res.redirect('/ingredients')
    }
}

var editIngredients = async function(req, res) {
    try {
        var findIngredient = await ingredients.findById(req.params.id)
        res.render("Ingredients/ingredientsEdit", { Ingredient: findIngredient })
    } catch (e) {
        console.log(e)
        req.flash("error", "Somethig went wrong")
        res.redirect("/ingredients")
    }
}

var updateIngredients = async function(req, res) {
    try {
        var findIngredient = await ingredients.findByIdAndUpdate(req.params.id, req.body.ingredientUp)
        res.redirect("/ingredients")
    } catch (e) {
        console.log(e)
        req.flash("error", "Somethig went wrong")
        res.redirect("/ingredients")
    }
}

var deleteIngredients = async function(req, res) {
    try {
        var deleteIngredient = await ingredients.findByIdAndRemove(req.params.id)
        res.redirect("/ingredients")
    } catch (e) {
        console.log(e)
        req.flash("error", "Somethig went wrong")
        res.redirect("/food")
    }
}
module.exports = { displayIngredients, newIngredientsform, addnewIngredients, editIngredients, updateIngredients, deleteIngredients }