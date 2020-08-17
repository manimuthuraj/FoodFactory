var express = require("express")
var router = express.Router();
var fuser = require("../models/fusers")
var bcrypt = require("bcryptjs")
var passport = require("passport")
var LocalStrategy = require("passport-local")
var controllers = require("../controllers/auth")
var middleware = require("../middlewares/index")


router.get("/signup", middleware.islogedin, controllers.signupForm)

router.post("/signup", middleware.islogedin, controllers.signUp)

router.get("/login", middleware.islogedin, controllers.loginForm)

router.post("/login", middleware.islogedin, controllers.loginUser)

router.get("/logout", controllers.logoutUser)
module.exports = router