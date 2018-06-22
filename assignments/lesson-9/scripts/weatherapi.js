//Connection to api
let weatherRequest = new XMLHttpRequest();
let apiURL = 'https://api.openweathermap.org/data/2.5/weather?&id=4156210&units=imperial&APPID=95c50e84bb2e9a7fd8638c5539fb7590';

weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload = function(){
    let weatherData =JSON.parse(weatherRequest.responseText);
    document.getElementById('current-temp').innerHTML =weatherData.main.temp;
    let imagesrc ='http://openweathermap.org/img/w/' + weatherData.weather[0].icon + 'png';
 document.getElementById('weatherimage').src = imagesrc;
}

/*document.getElementById('current-temp').innerHTML = weatherData.main.temp;
let imagesrc = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icom + 'png';
document.getElementById('weatherimage').src = imagesrc;*/

