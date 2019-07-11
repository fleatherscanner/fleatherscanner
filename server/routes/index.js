const express = require("express")
const router = express.Router()
const currency= require('./currency.js')
const userRouter = require("./user-route")


router.use('/currency', currency)
router.use("/users", userRouter)

module.exports = router
