$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.modal').modal();
});

const baseUrl = "http://localhost:3000/api"


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
        console.log(response)
    })
    .fail(function(err) {
        console.log(err)
    })
  }

$(document).ready(function(){
    $('select').formSelect();
});

$(document).ready(function(){
    $('.datepicker').datepicker();
});