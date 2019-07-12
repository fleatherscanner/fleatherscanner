const mongoose = require('mongoose')

const airportSchema = new mongoose.Schema({
    name: String,
    city: String,
    code: String
})

const Airport = mongoose.model('Airport', airportSchema)

module.exports = Airport