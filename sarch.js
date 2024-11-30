
// first  drop down

let array = ["Hyderabad", "Bangalore", "Chennai", "Goa", "Vijayawada", "Nellor", "Jaypur", "Mangalore", "Vishkhapatnam", "Delhi", "Indore", "Kolkata"];

array.forEach((city, index) => {
    let cityElement = document.getElementById(`${index + 1}-city`);
    // console.log(cityElement);

    cityElement.addEventListener('click', () => {
        let inp = document.querySelector('.input_tag');
        inp.setAttribute('value', city);

    });
});

//second drop down

let arraytwo = ["Hyderabad", "Bangalore", "Chennai", "Goa", "Vijayawada", "Nellor", "Jaypur", "Mangalore", "Vishkhapatnam", "Delhi", "Indore", "Kolkata"];
arraytwo.forEach((city, index) => {
    let cityElementtwo = document.getElementById(`${index + 13}-city`);
    // console.log(cityElementtwo);

    cityElementtwo.addEventListener('click', () => {
        let inp2 = document.querySelector('.input_tag_2');
        inp2.setAttribute('value', city);

    });
});



//drop down jquary
$(document).ready(function () {

    $('.froam_station').click(function () {
        $('#froam_station_list').toggle()
    })

})
$('#froam_station_list').click(function () {
    $('#froam_station_list').css('display', 'none')
})





$(document).ready(function () {

    $('.froam_station_2').click(function () {
        $('#froam_station_list_two').toggle()
    })

})
$('#froam_station_list_two').click(function () {
    $('#froam_station_list_two').css('display', 'none')
})



$(document).ready(function () {

    $('.froam_station').click(function () {
        $('#froam_station_list_two').css('display', 'none')

    })

    $('.froam_station_2').click(function () {
        $('#froam_station_list').css('display', 'none')

    })

})


