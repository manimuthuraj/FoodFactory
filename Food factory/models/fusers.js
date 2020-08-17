var mongoose = require("mongoose")
var passportLocalMongoose = require("passport-local-mongoose")

var fuserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "user", enum: ['user', 'admin'] },
    status: { type: String, default: "active", enum: ['active', 'block'] },
    mail: { type: String, required: true },
    created_date: {
        type: Date,
        default: Date.now
    },
    lastlogin: { type: Date },
    updated: { type: Date }
})
fuserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("fuser", fuserSchema)

// var mongoose = require("mongoose")
// var passportLocalMongoose = require("passport-local-mongoose")

// var euserSchema = new mongoose.Schema({
//     username: { type: String, required: true },
//     password: { type: String, required: true },
//     role: { type: String, default: "user", enum: ['user', 'admin'] },
//     status: { type: String, default: "active", enum: ['active', 'block'] },
//     mail: { type: String, required: true },
//     image: { type: String }
// })

// euserSchema.plugin(passportLocalMongoose);
// module.exports = mongoose.model("euser", euserSchema)