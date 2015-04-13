var cheerio = Meteor.npmRequire('cheerio');
var flight_times = "http://flydata.avinor.no/XmlFeed.asp?TimeFrom=1&TimeTo=2&airport=OSL&direction=D";

// Is triggered every 5 minutes
Meteor.setInterval(function() {

    var cachedFlights = Flights.find().count();
    // Delete everything older than 1 days, if more than 40 entries in db

    if(cachedFlights != 0){ // There
        var dateFilter = new Date();
        dateFilter.setDate(dateFilter.getDate() - 1);
        //Flights.remove({date: {$lt: dateFilter}})
        //Flights.remove({}); // Reset db
    }

    // GET flight info
    var flight_result = Meteor.http.get(flight_times);
    // Load content into cheerio
    $ = cheerio.load(flight_result.content);
    // Get all entries
    var flight = $('flight');
    
    //console.log(flight);

    //var id = $('flight').attr('uniqueID');

    // TODO: Get flight id attribute

    // For each entry
    $(flight).each(function(i, entry) {
        var $ = cheerio.load(entry);
        var airline_id = $('airline').text();
        var flight_id = $('flight_id').text();
        var schedule_time = $('schedule_time').text();
        var airport_id = $('airport').text();
        var check_in = $('check_in').text();
        var gate = $('gate').text();
        

        if(airport_id == null){
            console.log("Airport is null?");
            airport = "NOPE";
        }else{
            var airport = Airports.findOne({id:airport_id.toString()});
        }
        if(airline_id == null){
            console.log("Airline is null?");
            airline = "NOPE";
        }else{
            var airline = Airlines.findOne({id:airline_id.toString()});
        }
        
        //If id not in db
        if(Flights.find({flight_id: flight_id}).count() === 0)
            Flights.insert({ airline: airline.name.toString(), flight_id: flight_id.toString(), schedule_time: schedule_time, airport_name: airport.name.toString(), check_in: check_in.toString(), gate: gate, date: new Date()});
    });
}, 30000);
