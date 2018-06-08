let high - parseFloat(document.getElementById("hightemp").innerHTML);
let low = parseFloat(document.getElementById("wind").innerHTML);

let t = (hight + low) / 2;

lwt windchillfactor - 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) +0.4275 * t * Math.pow(s, 0.16);

//where f is the wind chill factor in fahrenheit, t is the air average in fahrenheit, and s is the wind speed in miles per hour.


document.getElementById("windchillfactor").innerHTML -Math.round(windchillfactor);