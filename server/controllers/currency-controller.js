const axios = require('axios');
// require('dotenv').config()
var instance = axios.create({
    baseURL: 'https://api.exchangeratesapi.io/'
});
class ControllerCurrency {
    static currency(req, res, next) {
        // console.log(req.body)
        // console.log(req.params)
        instance.get(`/latest?base=${req.body.base}`)
            .then((data) => {
                res.status(200).json(data)
            })
            .catch(next)
    }

}
module.exports = ControllerCurrency