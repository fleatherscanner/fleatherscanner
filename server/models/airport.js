const mongoose = require('mongoose')

const airportSchema = new mongoose.Schema({
    name: String,
    city: String,
    code: String
})

const Airport = mongoose.model('Airport', airportSchema)

// Airport.insertMany([
//     {
//         name: 'Soekarno Hatta',
//         city: 'Jakarta',
//         code: 'CGK'
//     },
//     {
//         name: 'Kuala Lumpur',
//         city: 'Kuala Lumpur',
//         code: 'KUL'
//     },
//     {
//         name: 'Singapore Changi',
//         city: 'Singapore',
//         code: 'SIN'
//     },
//     {
//         name: 'Suvarnabhumi',
//         city: 'Bangkok',
//         code: 'BKK'
//     },
//     {
//         name: 'Ninoy Aquino',
//         city: 'Manila',
//         code: 'MNL'
//     },
//     {
//         name: 'Tan Son Nhat',
//         city: 'Ho Chi Minh City',
//         code: 'SGN'
//     },
//     {
//         name: 'Ngurah Rai',
//         city: 'Denpasar',
//         code: 'DPS'
//     }
// ])

module.exports = Airport