var express = require("express")
var router = express.Router();
var fuser = require("../models/fusers")
var food = require("../models/food")
var ingredients = require("../models/ingredients")
var order = require("../models/orders");
const ingredientCon = require("../controllers/ingredient.con");
var controllers = require("../controllers/admin")
var middleware = require("../middlewares/index")

router.get("/admin", middleware.isAdmin, controllers.adminDash)

router.put("/admin/status", middleware.isAdmin, controllers.changeUserstatus)

module.exports = router