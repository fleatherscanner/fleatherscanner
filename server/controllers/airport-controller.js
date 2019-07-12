const Airport = require('../models/airport')

class AirportController {
    static get(req, res, next) {
        Airport.find()
            .then( data => {
                res.status(200).json(data)
            })
            .catch(next)
    }
}

module.exports = AirportController