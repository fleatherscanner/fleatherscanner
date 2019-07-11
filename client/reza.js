var tes = null
$(document).ready(function(){
    $.ajax(`http://localhost:3000/api/currency`, {
        method: 'GET'
    })

        .done(function (datas) {
            // console.log(datas)
            // $(".choose").empty()
            let dataKeluar = Object.keys(datas.rates)
            // console.log(dataKeluar)
            dataKeluar.forEach(data => {
                // console.log(data)
                    $("#choose").append(`
                    <option value="${data}">${data}</option>
                    `)


            })
            $('select').formSelect();
            // tes=  $( "#choose" ).val();
            // console.log(tes)
          
        })
        .fail(function(err){
            console.log(err)
        })

  });

  function selectCurrency() {
      var selected = $("#choose").val()
      $.ajax(`http://localhost:3000/api/currency/base`, {
        method: 'POST',
        data: {
            base : 'USD',
            money : 1,
            to : selected

        }
    })
        .done(function (data) {
            
            console.log(`${Object.values(data)}`)
            // $(".row").append(`
            // <div>${Object.values(data)}</div>
            // `)
        })
        .fail(function(err){
            console.log(err)
        })
      console.log(selected)
  }
