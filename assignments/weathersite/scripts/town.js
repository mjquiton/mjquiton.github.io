let town = new XMLHttpRequest();
let townURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

town.open('GET', townURL, true);
town.responseType = 'json';
town.send();

town.onload = function(){
   var towninfo = town.response;
    
    var frankmotto = towninfo.towns[0].motto;
    document.getElementById("fmotto").innerHTML = frankmotto;
    
    var frankyear = towninfo.towns[0].yearFounded;
    document.getElementById("fyear").innerHTML = frankyear;
    
    var frankpop = towninfo.towns[0].currentPopulation;
    document.getElementById("fpopulation").innerHTML = frankpop;
    
    var frankrain = towninfo.towns[0].averageRainfall;
    document.getElementById("frainFall").innerHTML = frankrain;
    
    var frankevents = towninfo.towns[0].events;
    document.getElementById("fevents").innerHTML = frankevents;
    
    
    
    var greenmotto = towninfo.towns[1].motto;
    document.getElementById("gmotto").innerHTML = greenmotto;
    
    var greenyear = towninfo.towns[1].yearFounded;
    document.getElementById("gyear").innerHTML = greenyear;
    
    var greenpop = towninfo.towns[1].currentPopulation;
    document.getElementById("gpopulation").innerHTML = greenpop;
    
    var greenrain = towninfo.towns[1].averageRainfall;
    document.getElementById("grainFall").innerHTML = greenrain;
    
    var greenevents = towninfo.towns[1].events;
    document.getElementById("gevents").innerHTML = greenevents;
    
    
    
    var springmotto = towninfo.towns[3].motto;
    document.getElementById("smotto").innerHTML = springmotto;
    
    var springyear = towninfo.towns[3].yearFounded;
    document.getElementById("syear").innerHTML = springyear;
    
    var springpop = towninfo.towns[3].currentPopulation;
    document.getElementById("spopulation").innerHTML = springpop;
    
    var springrain = towninfo.towns[3].averageRainfall;
    document.getElementById("srainFall").innerHTML = springrain;
    
    var springevents = towninfo.towns[3].events;
    document.getElementById("sevents").innerHTML = springevents;
    
}
