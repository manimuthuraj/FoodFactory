var express = require("express")
var router = express.Router();
var fuser = require("../models/fusers")
var bcrypt = require("bcryptjs")
var passport = require("passport")
var order = require("../models/orders")
var controllers = require("../controllers/userprofile")
var middleware = require("../middlewares/index")


router.get("/user", middleware.logedin, controllers.userProfile)

router.put("/user", middleware.logedin, controllers.changeUserpassword)

module.exports = router