var fuser = require("../models/fusers")
var food = require("../models/food")
var ingredients = require("../models/ingredients")
var order = require("../models/orders");
const ingredientCon = require("../controllers/ingredient.con");

var adminDash = async function(req, res) {
    try {
        var user = await fuser.find({ role: { $ne: 'admin' } })
            //Ingredients whose available quantity is less than the threshold quantity.
        var Ingredients = await ingredients.aggregate([{
                    "$project": {
                        "isthresholdQuantityGreater": { "$cmp": ["$thresholdQuantity", "$availableQuantity"] },
                        "name": 1,
                        "thresholdQuantity": 1,
                        "availableQuantity": 1,
                        "OtherFields": 1,
                    }
                },
                { "$match": { "isthresholdQuantityGreater": 1 } }
            ])
            //Food with costOfProduction higher than selling cost
        var foods = await food.aggregate([{
                    "$project": {
                        "iscostOfPGreater": { "$cmp": ["$costOfP", "$sCost"] },
                        "name": 1,
                        "costOfP": 1,
                        "sCost": 1,
                        "OtherFields": 1,
                    }
                },
                { "$match": { "iscostOfPGreater": 1 } }
            ])
            //Ingredients provided by same vendor
        var sameIngredients = await ingredients.aggregate([{
            $unwind: {
                path: "$user",
                preserveNullAndEmptyArrays: true
            }
        }, {
            $group: { _id: "$vendorName", "name": { "$push": "$name" } }
        }])
        res.render("adminDash/admin", { users: user, Ingredients: Ingredients, foods: foods, sameIngredients: sameIngredients })
    } catch (e) {
        console.log(e)
        req.flash("error", "Somethig went wrong")
        res.redirect("/food")
    }
}


var changeUserstatus = async function(req, res) {
    try {
        var user = await fuser.findById(req.body.id)
        var status
        if (user.status == "active") {
            status = "block"
        } else {
            status = "active"
        }
        var changeStatus = await fuser.findByIdAndUpdate(req.body.id, { status: status })
        req.flash("error", "status changed")
        res.redirect("/admin")
    } catch (e) {
        console.log(e)
        req.flash("error", "some thing went wrong")
        res.redirect("/admin")
    }
}
module.exports = { adminDash, changeUserstatus }