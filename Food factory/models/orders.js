var mongoose = require("mongoose")
var orderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    orderDate: {
        type: Date,
        default: Date.now
    },
    doD: {
        type: Date,
    },
    moT: {
        type: String
    },
    price: { type: Number },
    noItems: { type: Number, required: true },
    totalprice: { type: Number },
    food: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "food"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "fuser"
    },
    status: { type: String, enum: ['fastdelivery', 'normaldelivery'] }
})

module.exports = mongoose.model("order", orderSchema)