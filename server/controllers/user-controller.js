const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const client = new OAuth2Client(CLIENT_ID);


class UserController {
    static googleSignin (req, res, next) {
        client.verifyIdToken({
            idToken: req.body.token,
            audience: CLIENT_ID
        })
        .then(ticket =>{
            const payload = ticket.getPayload()
            console.log(payload)
            res.status(200).json(payload)
        })
        .catch(next)
    }

    static register (req, res, next) {

    }

    static login (req, res, next) {

    }
}

module.exports = UserController