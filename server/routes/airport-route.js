const express = require("express")
const router = express.Router()
const AirportController = require("../controllers/airport-controller")

router.get("/", AirportController.get)

module.exports = router