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
 * @api {get} /food list all food
 * @apiName food
 * @apiGroup food
 */

router.get(BASE_URL, controllers.allFoods)

/**
 * @api {get} /food/add Display form to add food
 * @apiName food
 * @apiGroup food
 */

router.get(BASE_URL + "/add", middleware.isAdmin, controllers.newFood)

/**
 * @api {post} /food add food to database
 * @apiName food
 * @apiGroup food
 */

router.post(BASE_URL, controllers.addNewfood)

/**
 * @api {get} /food/:id/edit Edit food
 * @apiName food
 * @apiGroup food
 */

router.get(BASE_URL + "/:id/edit", middleware.isAdmin, controllers.editFood)

/**
 * @api {put} /food/:id Update food
 * @apiName food
 * @apiGroup food
 */

router.put(BASE_URL + "/:id", middleware.isAdmin, controllers.updateFood)

/**
 * @api {delete} /food/:id/ Delete food
 * @apiName food
 * @apiGroup food
 */

router.delete(BASE_URL + "/:id", middleware.isAdmin, controllers.deleteFood)

module.exports = router