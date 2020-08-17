var mongoose = require("mongoose")

var IngredientsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lotnumber: { type: Number, required: true },
    availableQuantity: { type: Number, required: true },
    thresholdQuantity: { type: Number, required: true },
    price: { type: Number, required: true },
    vendorName: { type: String, required: true },
    vendorEmail: { type: String, required: true }
})

module.exports = mongoose.model("ingredients", IngredientsSchema)