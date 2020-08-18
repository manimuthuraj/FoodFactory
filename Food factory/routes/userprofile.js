var express = require("express")
var router = express.Router();
var fuser = require("../models/fusers")
var bcrypt = require("bcryptjs")
var passport = require("passport")
var order = require("../models/orders")
var controllers = require("../controllers/userprofile")
var middleware = require("../middlewares/index")

/**
 * @api {get} /user Display user orders and user information
 * @apiName user
 * @apiGroup user
 */

router.get("/user", middleware.logedin, controllers.userProfile)

/**
 * @api {put} /user change user passsword
 * @apiName user
 * @apiGroup user
 */

router.put("/user", middleware.logedin, controllers.changeUserpassword)

module.exports = router