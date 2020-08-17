var express = require("express")
var app = express()
var fuser = require("../models/fusers")
var bcrypt = require("bcryptjs")
var passport = require("passport")
var LocalStrategy = require("passport-local")
var flash = require("connect-flash");

module.exports = function(app) {
    app.use(flash());
    app.use(require("express-session")({
        secret: "mmr",
        resave: false,
        saveUninitialized: false
    }))
    app.use(passport.initialize())
    app.use(passport.session())
    passport.use(new LocalStrategy(fuser.authenticate()))
        //passport.serializeUser(euser.serializeUser())


    passport.use(new LocalStrategy({
            usernameField: 'mail',
            passwordField: 'password'
        },
        async function(username, password, done) {
            try {
                var user = await fuser.findOne({ mail: username })
                if (!user) {
                    return done(null, false, { message: "invalid Email" });
                }
                if (user.status == "block") {
                    return done(null, false, { message: "You were blocked" });
                }
                if (await bcrypt.compare(password, user.password)) {
                    var lastlogin = new Date()
                    var login = await fuser.findOneAndUpdate({ mail: username }, { lastlogin: lastlogin })
                        //console.log(login)
                    return done(null, user);
                } else {
                    return done(null, false, { message: "invalid password" });
                }
            } catch (e) {
                console.log(e)
            }
        }
    ));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        fuser.findById(id, function(err, user) {
            done(err, user);
        });
    });


    //passport.deserializeUser(euser.deserializeUser())
    app.use(function(req, res, next) {
        res.locals.currentUser = req.user;
        res.locals.message = req.flash("error")
        next();
    })
}