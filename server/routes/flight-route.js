const express = require("express")
const router = express.Router()
const FlightController = require("../controllers/flight-controller")
const WeatherController = require("../controllers/weather-controller")
const authenticate = require("../middlewares/authenticate")

// router.post("/flight", (req, res) => {
//     res.send("It works!")
// })
router.post("/flight", FlightController.searchRoute)

router.get("/weather/:city/:year/:month/:date", authenticate, WeatherController.getWeather)

module.exports = router