var url = "http://api.openweathermap.org/data/2.5/weather?lat=60.1952777778&lon=11.0994444444";

var temp = 5;
var icon = "01d.png";


getTemp = function() {
    return temp;
};


getIcon = function() {
    return icon;
};

updateWeather = function() {
    var result = Meteor.http.get(url);
    var response = JSON.parse(result.content);

    temp = (parseFloat(response.main.temp) - 273.15).toFixed(1);
    icon = response.weather[0].icon + ".png";
};

// Is triggered every minute
Meteor.setInterval(updateWeather, 60000);