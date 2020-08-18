var express = require("express")
var router = express.Router();
var fuser = require("../models/fusers")
var food = require("../models/food")
var ingredients = require("../models/ingredients")
var order = require("../models/orders");
const ingredientCon = require("../controllers/ingredient.con");
var controllers = require("../controllers/admin")
var middleware = require("../middlewares/index")

/**
 * @api {get} /admin Ingredients whose available quantity is less than the threshold quantity,Food with costOfProduction higher than selling cost,Ingredients provided by same vendor
 * @apiName admin
 * @apiGroup admin
 */

router.get("/admin", middleware.isAdmin, controllers.adminDash)

/**
 * @api {put} /admin change user status to activate or deactivate user
 * @apiName admin
 * @apiGroup admin
 */

router.put("/admin/status", middleware.isAdmin, controllers.changeUserstatus)

module.exports = router