const container = document.querySelector(".container"),
inputCity = container.querySelector(".input-city"),
inputCityName = inputCity.querySelector(".city-name"),
inputSearch = inputCity.querySelector("input");

// event listener for search bar to request API data when ENTER key pressed

inputSearch.addEventListener ("keyup", e => {
    if (e.key == "Enter" && inputSearch.value != "") {
        requestApi(inputSearch.value);
    }
});
// stores API key in variable to be queried - can be placed into config.js for security
var apiKey = "13f00cd7501485b4015676dd279bd9fe"

//function to fetch api data from openweather.api and turns ojbect into JSON

function requestApi(city) {
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(api).then(response => response.json()).then(result => cityWeather(result));
    
}

function cityWeather(info){
    console.log(info);
    
}

