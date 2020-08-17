var express = require("express")
var router = express.Router()
var food = require("../models/food")
var fuser = require("../models/fusers")
var order = require("../models/orders")
var controllers = require("../controllers/order")
var middleware = require("../middlewares/index")

router.get("/order/:id/new", middleware.logedin, controllers.userOrder)

router.post("/order/:id", middleware.logedin, controllers.createOrder)

router.get("/order/:id/edit", middleware.logedin, controllers.editOrder)

router.put("/order/:id", middleware.logedin, controllers.updateOrder)

router.delete("/order/:id", middleware.logedin, controllers.deleteOrder)

module.exports = router