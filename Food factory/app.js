var express = require('express')
var app = express()
require("dotenv").config()
var bodyparse = require("body-parser")
app.use(express.static(__dirname + "/public"));
var methodOverride = require("method-override")
app.use(methodOverride("_method"))
var flash = require('connect-flash')
app.use(flash())

app.use(bodyparse.urlencoded({ extended: true }))
app.set("view engine", "ejs")

require("./config/dbconnection")

var ingredientRoute = require("./routes/Ingredients")
var foodRoute = require("./routes/Food")
var authRoute = require("./routes/auth")
var userRoute = require("./routes/userprofile")
var orderRouter = require("./routes/order")
var adminRouter = require("./routes/admin")

require("./config/passportconfig")(app)

app.use(ingredientRoute)
app.use(foodRoute)
app.use(authRoute)
app.use(userRoute)
app.use(orderRouter)
app.use(adminRouter)

const PORT = 3000 || process.env.PORT
app.listen(PORT, function() {
    {
        console.log("server started")
    }
})