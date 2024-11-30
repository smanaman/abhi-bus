

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







function Hyderabad() {
    let city = document.getElementById('city')

    let citytext = city.textContent

    let input = document.querySelector('.input_tag')

    let inp = input.setAttribute('value', citytext)


}

// city two
function Bangalore() {
    let city = document.getElementById('cityTwo')

    let citytext = city.textContent

    let input = document.querySelector('.input_tag')

    let inp = input.setAttribute('value', citytext)


}

// city three
function Chennai() {
    let city = document.getElementById('cityThree')

    let citytext = city.textContent

    let input = document.querySelector('.input_tag')

    let inp = input.setAttribute('value', citytext)


}// city four
function Goa() {
    let city = document.getElementById('cityFour')

    let citytext = city.textContent

    let input = document.querySelector('.input_tag')

    let inp = input.setAttribute('value', citytext)


}// city five
function Vijayawada() {
    let city = document.getElementById('cityFive')

    let citytext = city.textContent

    let input = document.querySelector('.input_tag')

    let inp = input.setAttribute('value', citytext)


}// city six
function Nellore() {
    let city = document.getElementById('citySix')

    let citytext = city.textContent

    let input = document.querySelector('.input_tag')

    let inp = input.setAttribute('value', citytext)


}// city seven
function Jaipur() {
    let city = document.getElementById('citySeven')

    let citytext = city.textContent

    let input = document.querySelector('.input_tag')

    let inp = input.setAttribute('value', citytext)


}// city eight
function Mangalore() {
    let city = document.getElementById('cityEight')

    let citytext = city.textContent

    let input = document.querySelector('.input_tag')

    let inp = input.setAttribute('value', citytext)


}// city nine
function Visakhapatnam() {
    let city = document.getElementById('cityNine')

    let citytext = city.textContent

    let input = document.querySelector('.input_tag')

    let inp = input.setAttribute('value', citytext)


}
// city ten
function Delhi() {
    let city = document.getElementById('cityTen')

    let citytext = city.textContent

    let input = document.querySelector('.input_tag')

    let inp = input.setAttribute('value', citytext)


}
//city 13
function Indore() {
    let city = document.getElementById('city11')

    let citytext = city.textContent

    let input = document.querySelector('.input_tag')

    let inp = input.setAttribute('value', citytext)


}
//city 12
function Kolkata() {
    let city = document.getElementById('city12')

    let citytext = city.textContent

    let input = document.querySelector('.input_tag')

    let inp = input.setAttribute('value', citytext)


}

//seond droup down
// to station

function to_Hyderabad() {
    let city = document.getElementById('city')

    let citytext = city.textContent

    let input = document.querySelector('.input_tag_2')

    let inp = input.setAttribute('value', citytext)


}

// city two
function to_Bangalore() {
    let city = document.getElementById('cityTwo')

    let citytext = city.textContent

    let input = document.querySelector('.input_tag_2')

    let inp = input.setAttribute('value', citytext)


}

// city three
function to_Chennai() {
    let city = document.getElementById('cityThree')

    let citytext = city.textContent

    let input = document.querySelector('.input_tag_2')

    let inp = input.setAttribute('value', citytext)


}// city four
function to_Goa() {
    let city = document.getElementById('cityFour')

    let citytext = city.textContent

    let input = document.querySelector('.input_tag_2')

    let inp = input.setAttribute('value', citytext)


}// city five
function to_Vijayawada() {
    let city = document.getElementById('cityFive')

    let citytext = city.textContent

    let input = document.querySelector('.input_tag_2')

    let inp = input.setAttribute('value', citytext)


}// city six
function to_Nellore() {
    let city = document.getElementById('citySix')

    let citytext = city.textContent

    let input = document.querySelector('.input_tag_2')

    let inp = input.setAttribute('value', citytext)


}// city seven
function to_Jaipur() {
    let city = document.getElementById('citySeven')

    let citytext = city.textContent

    let input = document.querySelector('.input_tag_2')

    let inp = input.setAttribute('value', citytext)


}// city eight
function to_Mangalore() {
    let city = document.getElementById('cityEight')

    let citytext = city.textContent

    let input = document.querySelector('.input_tag_2')

    let inp = input.setAttribute('value', citytext)


}// city nine
function to_Visakhapatnam() {
    let city = document.getElementById('cityNine')

    let citytext = city.textContent

    let input = document.querySelector('.input_tag_2')

    let inp = input.setAttribute('value', citytext)


}
// city ten
function to_Delhi() {
    let city = document.getElementById('cityTen')

    let citytext = city.textContent

    let input = document.querySelector('.input_tag_2')

    let inp = input.setAttribute('value', citytext)


}
//city 13
function to_Indore() {
    let city = document.getElementById('city11')

    let citytext = city.textContent

    let input = document.querySelector('.input_tag_2')

    let inp = input.setAttribute('value', citytext)


}
//city 12
function to_Kolkata() {
    let city = document.getElementById('city12')

    let citytext = city.textContent

    let input = document.querySelector('.input_tag_2')

    let inp = input.setAttribute('value', citytext)

  }



  // Function to set value based on city and input selector
function setCityValue(cityId, inputSelector) {
    const city = document.getElementById(cityId);
    const input = document.querySelector(inputSelector);

    if (city && input) {
        input.setAttribute('value', city.textContent);
    }
}

// List of cities for the first dropdown
const cityIds = [
    'cityThree', 'cityFour', 'cityFive', 'citySix', 'citySeven',
    'cityEight', 'cityNine', 'cityTen', 'city11', 'city12'
];

// List of cities for the second dropdown
const toCityIds = [
    'city', 'cityTwo', 'cityThree', 'cityFour', 'cityFive',
    'citySix', 'citySeven', 'cityEight', 'cityNine', 'cityTen',
    'city11', 'city12'
];

// Add event listeners for the first dropdown
cityIds.forEach((cityId, index) => {
    document.getElementById(cityId)?.addEventListener('click', () => {
        setCityValue(cityId, '.input_tag');
    });
});

// Add event listeners for the second dropdown
toCityIds.forEach((cityId, index) => {
    document.getElementById(cityId)?.addEventListener('click', () => {
        setCityValue(cityId, '.input_tag_2');
    });
});
