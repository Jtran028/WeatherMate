var container = document.querySelector("container");
var inputCity = document.querySelector("input-city");
var inputCityName = document.querySelector("city-name");
var inputSearch = document.querySelector("input");
var cityMain = document.querySelector("#city-main");
var fiveDay = document.querySelector("#five-day")
var weatherIcon = document.querySelector("#weather-icon")

let api;

let forecast;
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
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    forecast = `https://api.openweathermap.org/data/2.5/forecast/?q=${city}&appid=${apiKey}&units=imperial`;     
    fetchData();
    forcastData();
    
}

function fetchData() {
    fetch(api).then(response => response.json()).then(result => cityWeather(result));

    
}

function cityWeather(info){
    //removes hidden cards
    cityMain.removeAttribute("hidden");
    fiveDay.removeAttribute("hidden");
    console.log(info);

    let currentDate = moment(info.dt.value).format("MMM D YYYY");

    // variables for ojbect data values

    var cityName = info.name;
    var cityDegree = info.main.temp;
    var cityHumidity = info.main.humidity;
    var cityWind = info.wind.speed;

    //replaces current elements with fetched info

    document.querySelector(".display-2").innerText = cityName;
    document.querySelector(".current-date").innerText = currentDate;
    document.querySelector(".city-degree").innerText ="Temperature:" + cityDegree + "°F";
    document.querySelector(".city-humidity").innerText = "Humidity: " + cityHumidity + " %";
    document.querySelector(".city-windspeed").innerText = "Wind: " + cityWind + " mph"
    // document.querySelector(".city-uv").innerText = cityName;
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`);
    
}
// fetches from the 5 day forecast API
function forcastData() {
    fetch(forecast).then(response => response.json()).then(result => cityForecast(result))
    
}

function cityForecast(data) {
    console.log(data);
    console.log(data.list);
// for loop creates an index for 5 days because the original response is for every 3 hours
    var fiveDay = data.list;
        for(var i=5; i < fiveDay.length; i=i+8){
       var fiveDayForecast = fiveDay[i];
       console.log(fiveDayForecast);
       
// couldnt figure out how to group the returned result into an ARRAY

}
}
    

    




