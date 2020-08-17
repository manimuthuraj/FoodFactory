//Cheking Admin or not
async function isAdmin(req, res, next) {
    if (req.isAuthenticated()) {
        id = await (req.user.role)
        if (id == 'admin') {
            next()
        } else {
            res.redirect("/food")
        }
    } else {
        req.flash("error", "login first")
        res.redirect("/food")
    }
}

//checing logedin or not and if yes restricting from registrattion and login page
async function islogedin(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect("/food")
    }
    next()
}

//Checking logedin or not and if not saying pleasing login 
async function logedin(req, res, next) {
    if (req.isAuthenticated()) {
        next()
    } else {
        req.flash("error", "please login")
        res.redirect("/food")
    }
}
module.exports = {
    isAdmin,
    islogedin,
    logedin,
}