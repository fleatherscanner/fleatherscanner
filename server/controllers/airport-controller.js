const Airport = require('../models/airport')

class AirportController {
    static get(req, res, next) {
        Airport.find()
            .then( data => {
                res.status(200).json(data)
            })
            .catch(next)
    }

    static seed(req, res, next) {
        Airport.insertMany([
            {
                name: 'Soekarno Hatta',
                city: 'Jakarta',
                code: 'CGK'
            },
            {
                name: 'Kuala Lumpur',
                city: 'Kuala Lumpur',
                code: 'KUL'
            },
            {
                name: 'Singapore Changi',
                city: 'Singapore',
                code: 'SIN'
            },
            {
                name: 'Suvarnabhumi',
                city: 'Bangkok',
                code: 'BKK'
            },
            {
                name: 'Ninoy Aquino',
                city: 'Manila',
                code: 'MNL'
            },
            {
                name: 'Tan Son Nhat',
                city: 'Ho Chi Minh City',
                code: 'SGN'
            },
            {
                name: 'Ngurah Rai',
                city: 'Denpasar',
                code: 'DPS'
            }
        ])
    }

}

// Cuma buat SEED sekali aja
// AirportController.seed()

module.exports = AirportController