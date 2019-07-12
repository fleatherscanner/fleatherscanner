$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('select').formSelect();
    $('.datepicker').datepicker();
    toggleLogin()
    listAirport()
});

var baseUrl = "http://localhost:3000/api"


function onSignIn(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    $.ajax({
        method: "POST",
        url: `${baseUrl}/users/signin/google`,
        data: {
            token: id_token
        }
    })
    .done(function(response) {
        $(".modal").modal("close")
        localStorage.setItem("token", response.access_token)
        localStorage.setItem("username", response.username)
        toggleLogin()
    })
    .fail(function(err) {
        console.log(err)
    })
}

function login() {
    var username = $("#usernameLogin").val()
    var password = $("#passwordLogin").val()
    $.ajax({
        method: "POST",
        url: "http://localhost:3000/api/users/signin",
        data: {
            username: username,
            password: password
        }
    })
    .done(function(response) {
        $(".modal").modal("close")
        $("#usernameLogin").val("")
        $("#passwordLogin").val("")
        localStorage.setItem("token", response.access_token)
        localStorage.setItem("username", response.username)
        toggleLogin()
    })
    .fail(function(err) {
        console.log(err.responseJSON)
    })
}

function register() {
    var username = $("#usernameRegister").val()
    var password = $("#passwordRegister").val()
    var email = $("#emailRegister").val()
    $.ajax({
        method: "POST",
        url: "http://localhost:3000/api/users/signup",
        data: {
            username: username,
            email: email,
            password: password
        }
    })
    .done(function(response) {
        $(".modal").modal("close")
        $("#usernameRegister").val("")
        $("#emailRegister").val("")
        $("#passwordRegister").val("")
        $("#emailRegister").val()
        localStorage.setItem("token", response.access_token)
        localStorage.setItem("username", response.username)
        toggleLogin()
    })
    .fail(function(err) {
        console.log(err.responseJSON)
    })
}

function toggleLogin() {
    var token = localStorage.getItem("token")
    if(token) {
        $("#register").hide()
        $("#login").hide()
        $("#logout").text(`${localStorage.getItem("username")} | Logout`)
        $("#logout").show()
    } else {
        $("#register").show()
        $("#login").show()
        $("#logout").text(`Logout`)
        $("#logout").hide()
    }
}

function logout() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    localStorage.removeItem("token")
    toggleLogin()
}

function listAirport() {
    console.log("list airport")
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/api/airports"
    })
    .done(function(response){
        console.log("masuk ajax")
        response.forEach( a => {
            $("#arrival").append(`<option value="${a.code}">${a.city} - ${a.name} International Airport</option>`)
        });
    })
    .fail(function(err) {
        console.log(err.responseJSON)
    })
}
