const express = require("express")
const router = express.Router()
const userRouter = require("./user-route")
const flightRouter = require("./flight-route")

router.use("/users", userRouter)


router.use("flight", flightRouter)

module.exports = router