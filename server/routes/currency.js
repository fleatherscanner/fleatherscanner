const express = require('express')
const router = express.Router()
const Controller = require('../controllers/currency-controller.js')
// const authenticate = require('../middlewares/authenticators')
// // const authorizations = require('../middlewares/authorizations')
router.get('/', Controller.getCurrency)
router.post('/base', Controller.currency)
module.exports = router