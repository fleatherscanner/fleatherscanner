const express = require("express")
const router = express.Router()
const FlightController = require("../controllers/flight-controller")

router.post("/flight", (req, res) => {
    res.send("It works!")
})
router.post("/flight", FlightController.searchRoute)

module.exports = router