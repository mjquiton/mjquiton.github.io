let weatherObj = new XMLHttpRequest();
    weatherObj.open('GET', '//api.openweathermap.org/data/2.5/weather?&id=4250542&units=imperial&APPID=95c50e84bb2e9a7fd8638c5539fb7590', true);
    weatherObj.send();

    weatherObj.onload = function() {
      let weatherData= JSON.parse(weatherObj.responseText);
        console.log(weatherData);
        
    document.getElementById('desc').innerHTML = weatherData.weather[0].description;
    let imagesrc ="https://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
        document.getElementById('icon').src = imagesrc;
        
    document.getElementById('wind').innerHTML = weatherData.wind.speed;
    document.getElementById('current').innerHTML = weatherData.main.temp;
        
    }
    