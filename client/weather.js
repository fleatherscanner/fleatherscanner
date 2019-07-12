var baseUrl = "http://localhost:3000/api"

function getWeather(event){
    event.preventDefault()

    var date = $("#departure-date").val()
    var temp = new Date(date)
    var year = temp.getFullYear()
    var month = temp.getMonth()+1
    var date = temp.getDate()
    $.ajax({
        method: "GET",
        url: `${baseUrl}/flights/weather/newyork/${year}/${month}/${date}`
    })
    .done(function(response) {
        console.log(response, "MASUK")
    })
    .fail(function(err) {
        console.log(err.responseJSON)
    })
}
