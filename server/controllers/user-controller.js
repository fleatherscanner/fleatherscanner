const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const client = new OAuth2Client(CLIENT_ID);
const User = require("../models/user")
const jwt = require("jsonwebtoken")
const secret = process.env.SECRET
const bcrypt = require("bcrypt")

class UserController {
    static googleSignin (req, res, next) {
        var payload = null
        client.verifyIdToken({
            idToken: req.body.token,
            audience: CLIENT_ID
        })
        .then(ticket =>{
            payload = ticket.getPayload()
            return User.findOne({email: payload.email})
        })
        .then(user =>{
            if(user){
                return user
            } else {
                var newuser = new User({
                    username: payload.name,
                    email: payload.email,
                    password: payload.jti
                })
                return newuser.save()
            }
        })
        .then(user =>{
            const token = jwt.sign({_id: user._id, username: user.username, email: user.email}, secret, {expiresIn: "6h"})
            res.status(200).json({access_token: token, username: user.username})
        })
        .catch(next)
    }

    static register (req, res, next) {
        var newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        newUser.save()
        .then(user =>{
            const token = jwt.sign({_id: user._id, username: user.username, email: user.email}, secret, {expiresIn: "6h"})
            res.status(200).json({access_token: token, username: user.username})
        })
        .catch(next)
    }

    static login (req, res, next) {
        var userData = null
        User.findOne({username: req.body.username})
        .then(user =>{
            if(!user){
                throw({
                    code: 400,
                    message: "Invalid username/password"
                })
            }
            userData = user
            return bcrypt.compare(req.body.password, user.password)
        })
        .then(valid =>{
            if(valid){
                const token = jwt.sign({_id: userData._id, username: userData.username, email: userData.email}, secret, {expiresIn: "6h"})
                res.status(200).json({access_token: token, username: userData.username})
            } else {
                throw({
                    code: 400,
                    message: "Invalid username/password"
                }) 
            }
        })
        .catch(next)
    }
}

module.exports = UserController