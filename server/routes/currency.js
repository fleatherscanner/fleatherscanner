const express = require('express')
const router = express.Router()
const Controller = require('../controllers/currency-controller.js')
// const authenticate = require('../middlewares/authenticators')
// // const authorizations = require('../middlewares/authorizations')
router.post('/currency', Controller.currency)
// https://api.exchangeratesapi.io/latest?base=IDR