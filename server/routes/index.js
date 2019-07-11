const express = require("express")
const router = express.Router()
const currency= require('./currency.js')
router.use('/currency', currency)
module.exports = router
