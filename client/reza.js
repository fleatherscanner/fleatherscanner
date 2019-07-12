var tes = null
$(document).ready(function () {
select(event)
selectCurrency()
});
function select(event) {
    event.preventDefault()
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
        .fail(function (err) {
            console.log(err)
        })

}
function selectCurrency() {
    $("#choose").change(function() {
        var selected = $("#choose").val()
        console.log(selected)
    })
    // $.ajax(`http://localhost:3000/api/currency/base`, {
    //     method: 'POST',
    //     data: {
    //         base: 'USD',
    //         money: 100,
    //         to: selected

    //     }
    // })
    //     .done(function (data) {
    //         console.log(data)
    //         console.log(`${Object.values(data)}`)
    //         // $(".row").append(`
    //         // <div>${Object.values(data)}</div>
    //         // `)
    //     })
    //     .fail(function (err) {
    //         console.log(err)
    //     })
}



