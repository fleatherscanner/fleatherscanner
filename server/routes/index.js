const express = require("express")
const router = express.Router()
const currency= require('./currency.js')
const userRouter = require("./user-route")
const flightRouter = require("./flight-route")
const airportRouter = require("./airport-route")


router.use('/currency', currency)
router.use("/users", userRouter)
router.use("flight", flightRouter)
router.get("/airports", airportRouter)

module.exports = router
