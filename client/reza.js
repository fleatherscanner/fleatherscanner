var tes = null
$(document).ready(function () {
select(event)
// selectCurrency()
});
function select(event, i) {
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
                $(`#choose${i}`).append(`
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
function selectCurrency(i, value) {
   
        var selected = $(`#choose${i}`).val()
        console.log(selected)
 
    $.ajax(`http://localhost:3000/api/currency/base`, {
        method: 'POST',
        data: {
            base: 'USD',
            money: value,
            to: selected

        }
    })
        .done(function (data) {
            console.log(data)
            // console.log(`${Object.values(data)}`)
            var num = Math.floor(+Object.values(data))
            var string = numeral(num).format("0,0")
            $(`#cost${i}`).text(Object.keys(data)[0] + " " + string)
            // $(".row").append(`
            // <div>${Object.values(data)}</div>
            // `)
        })
        .fail(function (err) {
            console.log(err)
        })
}



