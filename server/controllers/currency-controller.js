const axios = require('axios');
// require('dotenv').config()
var instance = axios.create({
    baseURL: 'https://api.exchangeratesapi.io/'
});
class ControllerCurrency {
    static currency(req, res, next) {
        console.log(req.body)
        // console.log(req.params)
        console.log('disini')
        instance.get(`/latest?base=${req.body.base}`)
            .then(({ data }) => {
                // console.log(Object.entries(data.rates))
                const filtered = Object.keys(data.rates)
                    .filter(key =>key.match(req.body.to))
                    .reduce((obj, key) => {
                        obj[key] = data.rates[key] * req.body.money;
                        return obj;
                    }, {});
                let hasil = filtered
                res.status(200).json(filtered)
            })
            .catch(next)
    }

}
module.exports = ControllerCurrency