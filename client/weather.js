var baseUrl = "http://localhost:3000/api"

function getWeather(event){
    event.preventDefault()
    $("#flightDetails").empty()
    $("#loading").show()
    var date = $("#departure-date").val()
    var temp = new Date(date)
    var year = temp.getFullYear()
    var monthInt = temp.getMonth()+1
    var dateInt = temp.getDate()
    var month = null
    var date = null
    if(monthInt < 10) {
        month = `0${monthInt}`
    } else {
        month = monthInt
    }
    if(dateInt < 10) {
        date = `0${dateInt}`
    } else {
        date = dateInt
    }
    var departureCode = $("#departure").val().split(":")[0]
    var arrivalCode = $("#arrival").val().split(":")[0]
    var departureCity = $("#departure").val().split(":")[1].toLowerCase()
    var arrivalCity = $("#arrival").val().split(":")[1].toLowerCase()
    
    var flightData = {
        departureCode: departureCode,
        arrivalCode: arrivalCode,
        date: `${year}-${month}-${date}`
    }
    
    // console.log(flightData)
        
   

    $.ajax({
        method: "GET",
        url: `${baseUrl}/flights/weather/${arrivalCity}/${year}/${month}/${date}`,
        headers: {
            token: localStorage.getItem("token")
        }
    })
    .done(function(response) {
        getFlight(flightData, function(flights) {
            // console.log(flights, response)
            console.log(flights)
            $("#loading").hide()
            // console.log(response)
            flights.Quotes.forEach((flight, i) =>{
                var flightDate = new Date(flight.QuoteDateTime)
                var flightHour = flightDate.getHours()
                var flightMinute = flightDate.getMinutes()
                var random = Math.round(Math.random()*(3 - 2) + 2)
                var random1 = Math.round(Math.random()*(60 - 1) + 1)
                var arrivalHour = flightHour + random
                var arrivalMinute = random1
                if(flightHour < 10) {
                    flightHour = "0"+ flightHour
                }
                if(flightMinute < 10) {
                    flightMinute = "0" + flightMinute
                }
                if(arrivalHour < 10) {
                    arrivalHour = "0"+ arrivalHour
                }
                if(arrivalMinute < 10) {
                    arrivalMinute = "0" + arrivalMinute
                }
                var value = flight.MinPrice
                var cost = flight.MinPrice
                $(function() {
                    select(event, i)
                    // selectCurrency(i, value)
                })
                var carrierId = flight.OutboundLeg.CarrierIds[0]
                var index = flights.Carriers.findIndex(carrier => carrier.CarrierId == carrierId)
                var carrierName = flights.Carriers[index].Name
                $("#flightDetails").append(`
                <div class="row">
                        <div class="col s2 push-s8" style="margin-top: 2%;">
                                <div class="input-field">
                                        <select id="choose${i}" onchange="selectCurrency(${i}, '${value}')">
                                        </select>
                                        <label>Choose your currency</label>
                                </div>
                        </div>
                    <div class="card-content">
                        <div class="col s2 pull-s2">
                            <div style="font-size: 17px;"><i class="material-icons cyan-text">flight</i>${carrierName}</div>
                        </div>

                        <div class="col s2 pull-s3" style="padding-left: 7%;">
                            <div id="departure-time" style="font-size: 18px;">${flightHour}:${flightMinute}</div>
                            <div class="grey-text">${flights.Places[0].CityName}</div>
                            <div style="font-size: 12px" class="grey-text">${flights.Places[0].Name}</div>
                        </div>

                        <div class="col s1 pull-s3">
                            <i class="material-icons">send</i>
                        </div>

                        <div class="col s2 pull-s3">
                            <div id="departure-time" style="font-size: 18px;">${arrivalHour}:${arrivalMinute}</div>
                            <div class="grey-text">${flights.Places[1].CityName}</div>
                            <div style="font-size: 12px" class="grey-text">${flights.Places[1].Name}</div>
                        </div>
                        <div class="col s2 pull-s3">
                            <div style="font-size: 20px" id="cost${i}">USD ${cost}</div>
                        </div>

                        <div class="col s1">
                            <img src="https://www.metaweather.com/static/img/weather/${response.weather_state_abbr}.svg">
                        </div>
                    </div>

                </div>

                <div class="divider"></div>
                `)
            })
        })
    })
    .fail(function(err) {
        console.log(err.responseJSON)
    })
}

function getFlight(obj, cb) {
    console.log(`${baseUrl}/flights/flight`)
    $.ajax({
        method: "POST",
        url: `${baseUrl}/flights/flight`,
        data: {
            depart: obj.departureCode,
            arrive: obj.arrivalCode,
            date: obj.date,
        }
    })
    .done(function(response) {
        // console.log(response)
        cb(response)
    })
    .fail(function(err) {
        console.log(err.responseJSON)
    })
}
