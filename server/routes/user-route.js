const express = require("express")
const router = express.Router()
const userController = require("../controllers/user-controller")

router.post("/signin/google", userController.googleSignin)
router.post("/signin", userController.login)
router.post("/signup", userController.register)


module.exports = router