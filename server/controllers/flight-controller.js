const Flight = require('../models/flight')

class FlightController {
    static searchRoute (req, res, next) {
        let { depart, arrive, date } = req.body
        //date yyyy-mm-dd
        Flight.searchRoute(depart, arrive, date)
            .then( data => {
                res.status(200).json(data)
            })

            .catch(next)
    }
}

module.exports = FlightController