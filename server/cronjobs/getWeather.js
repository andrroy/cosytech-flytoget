var url = "http://api.openweathermap.org/data/2.5/weather?lat=60.1952777778&lon=11.0994444444";

var temp = 5;
var icon = "cloudy.png";

var iconHack = {
    "01d": "sunny.png",
    "01n": "sunny.png",
    "02d": "sun_cloudy.png",
    "02n": "sun_cloudy.png",
    "03d": "cloudy.png",
    "03n": "cloudy.png",
    "04d": "cloudy.png",
    "04n": "cloudy.png",
    "09d": "rain.png",
    "09n": "rain.png",
    "10d": "rain.png",
    "10n": "rain.png",
    "11d": "rain.png",
    "11n": "rain.png",
    "13d": "more_snow.png",
    "13n": "more_snow.png"
};


getTemp = function() {
    return temp;
};


getIcon = function() {
    return icon;
};

updateWeather = function() {
    try {
        var result = Meteor.http.get(url);
        var response = JSON.parse(result.content);

        temp = (parseFloat(response.main.temp) - 273.15).toFixed(1);

        icon = iconHack[response.weather[0].icon];
        // Default to cloudy if no matching icon found
        if(!icon)
            icon = "cloudy.png";
    }
    catch(err) {
        console.log(err);
    }
};

// Is triggered every minute
Meteor.setInterval(updateWeather, 60000);