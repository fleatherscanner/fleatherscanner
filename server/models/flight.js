const axios = require('axios')

const skyscanner = axios.create({
    baseURL: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/ID/USD/en-US',
    headers: 
        {
            'X-RapidAPI-Host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
            'X-RapidAPI-Key': '06ab53acf5mshbf03efe97fe1e91p185b69jsnf7bd864c7dc3' 
        }
    });

class Flight {
    static searchRoute (depart, arrive, date){
        return skyscanner.get(`/${depart}-sky/${arrive}-sky/${date}`)
    }
}

module.exports = Flight

