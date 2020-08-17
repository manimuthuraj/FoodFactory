var mongoose = require("mongoose")

var foodScheme = new mongoose.Schema({
    name: { type: String, required: true },
    created_date: {
        type: Date,
        default: Date.now
    },
    cuisine: { type: String, required: true },
    ingredients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ingredients"
    }],
    lotnumber: { type: Number, required: true },
    costOfP: { type: Number, required: true },
    sCost: { type: Number, required: true }
})

module.exports = mongoose.model("food", foodScheme)