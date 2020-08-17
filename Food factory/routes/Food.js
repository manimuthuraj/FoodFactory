var express = require("express")
var router = express.Router()
var food = require("../models/food")
var ingredients = require("../models/ingredients")
var controllers = require("../controllers/food")
var middleware = require("../middlewares/index")
var BASE_URL = "/food"

router.get("/", function(req, res) {
    res.redirect("/food")
})

/**
 * @api {get} /food list all foods
 * @apiName foods
 */

router.get(BASE_URL, controllers.allFoods)

/**
 * @api {get} /food list all foods
 * @apiName foods
 */

router.get(BASE_URL + "/add", middleware.isAdmin, controllers.newFood)

router.post(BASE_URL, controllers.addNewfood)

router.get(BASE_URL + "/:id/edit", middleware.isAdmin, controllers.editFood)

router.put(BASE_URL + "/:id", middleware.isAdmin, controllers.updateFood)

router.delete(BASE_URL + "/:id", middleware.isAdmin, controllers.deleteFood)

module.exports = router