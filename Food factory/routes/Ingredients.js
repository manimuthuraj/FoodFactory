var express = require("express")
var router = express.Router();
var controllers = require("../controllers/ingredient.con")
var middleware = require("../middlewares/index")
var BASE_URL = "/ingredients"


//display all ingredients
router.get(BASE_URL, middleware.isAdmin, controllers.displayIngredients)

//displar form
router.get(BASE_URL + "/add", middleware.isAdmin, controllers.newIngredientsform)

//add new ingredients
router.post(BASE_URL, middleware.isAdmin, controllers.addnewIngredients)

//edit  ingredients
router.get(BASE_URL + "/:id/edit", middleware.isAdmin, controllers.editIngredients)

//update ingredients
router.put(BASE_URL + "/:id", middleware.isAdmin, controllers.updateIngredients)

//delete ingredients
router.delete(BASE_URL + "/:id", middleware.isAdmin, controllers.deleteIngredients)

module.exports = router