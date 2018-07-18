let bike = new XMLHttpRequest();
let bikeURL = 'assignments/mountain-spoke/data/data-ms.json';

bike.open('GET', bikeURL, true);
bike.responseType = 'json';
bike.send();

bike.onload = function(){
   var bikeinfo = bike.response;
    
    var bikequick = bikeinfo.bikes[0].service;
    document.getElementById("qTune").innerHTML = bikequick;
    
    var quickprice = towninfo.bikes[0].price;
    document.getElementById("qPrice").innerHTML = quickprice;
    
    var quickdesc = towninfo.bikes[0].description;
    document.getElementById("qDesc").innerHTML = quickdesc;
    
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
