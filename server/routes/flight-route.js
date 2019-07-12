const express = require("express")
const router = express.Router()
const FlightController = require("../controllers/flight-controller")
const WeatherController = require("../controllers/weather-controller")

router.post("/flight", (req, res) => {
    res.send("It works!")
})
router.post("/flight", FlightController.searchRoute)

router.get("/weather/:city/:year/:month/:date", WeatherController.getWeather)

module.exports = router