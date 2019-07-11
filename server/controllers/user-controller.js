const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const client = new OAuth2Client(CLIENT_ID);
const User = require("../models/user")


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

            } else {

            }
        })
        .catch(next)
    }

    static register (req, res, next) {

    }

    static login (req, res, next) {

    }
}

module.exports = UserController