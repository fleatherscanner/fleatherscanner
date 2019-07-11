const jwt = require('jsonwebtoken')
const secret = process.env.SECRET

module.exports = (req, res, next) =>{
    if(req.headers.token){
        var decoded = jwt.verify(req.headers.token, secret)
        if(decoded !== Error){
            req.headers.decoded = decoded
            next()
        }else{
            throw new Error('Invalid Token')
        }
    }else{
        throw new Error('Login first')
    }
}