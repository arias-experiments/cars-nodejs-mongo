const mongoose = require('mongoose')
const Schema = mongoose.Schema
const CarSchema = new Schema({
    make: String,
    model: String,
    color: Number,
    year: Number
})

module.exports = mongoose.model('Car', CarSchema)