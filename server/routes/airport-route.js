const express = require("express")
const router = express.Router()
const AirportController = require("../controllers/airport-controller")

router.get("/", AirportController.get)
// router.post("/seed", AirportController.seed)

module.exports = router