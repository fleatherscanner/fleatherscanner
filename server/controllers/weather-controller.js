const baseUrl = "https://www.metaweather.com/api/location"
const axios = require("axios")

class WeatherController {
    
    static getWeather(req, res, next) {
        const {city, year, month, date} = req.params
        axios.request({
            method: "GET",
            url: `${baseUrl}/search/?query=${city}`
        })
        .then(response =>{
            if(response.data.length === 0 || !response.data) {
                throw({
                    code: 404,
                    message: "City/forecast not found"
                })
            }
            var woeid = response.data[0].woeid
            return axios.request({
                method: "GET",
                url: `${baseUrl}/${woeid}/${year}/${month}/${date}`
            })
        })
        .then(response =>{
            res.status(200).json(response.data[0])
        })
        .catch(next)
    }
}

module.exports = WeatherController