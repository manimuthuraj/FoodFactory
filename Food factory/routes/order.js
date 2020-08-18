var express = require("express")
var router = express.Router()
var food = require("../models/food")
var fuser = require("../models/fusers")
var order = require("../models/orders")
var controllers = require("../controllers/order")
var middleware = require("../middlewares/index")

/**
 * @api {get} /order/:id/new Order food
 * @apiName food
 * @apiGroup food
 */

router.get("/order/:id/new", middleware.logedin, controllers.userOrder)

/**
 * @api {post} /order/:id create Order for food
 * @apiName order
 * @apiGroup order
 */

router.post("/order/:id", middleware.logedin, controllers.createOrder)

/**
 * @api {get} /order/:id/edit edit Order
 * @apiName order
 * @apiGroup order
 */

router.get("/order/:id/edit", middleware.logedin, controllers.editOrder)

/**
 * @api {put} /order/:id/ Update Order 
 * @apiName order
 * @apiGroup order
 */

router.put("/order/:id", middleware.logedin, controllers.updateOrder)

/**
 * @api {delete} /order/:id delete Order
 * @apiName order
 * @apiGroup order
 */

router.delete("/order/:id", middleware.logedin, controllers.deleteOrder)

module.exports = router