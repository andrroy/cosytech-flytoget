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

    //var id = $('flight').attr('uniqueID');

    // TODO: Get flight id attribute

    // For each entry
    $(flight).each(function(i, entry) {
        var $ = cheerio.load(entry);
        //var id = $.attr('uniqueID');
        var airline = $('airline').text();
        var flight_id = $('flight_id').text();
        var schedule_time = $('schedule_time').text();
        var airport_id = $('airport').text();
        //var airport = $('airport').text();
        var check_in = $('check_in').text();
        var gate = $('gate').text();

        // Get name from local cache
        var airport = Airports.findOne({id:airport_id.toString()});
        if(airport == null){
            console.log("GUNNAR");
            airport = "NOPE";
        }

         //If id not in db
        if(Flights.find({flight_id: flight_id}).count() === 0)
            Flights.insert({ airline: airline.toString, flight_id: flight_id.toString(), schedule_time: schedule_time, airport_name: airport.name, check_in: check_in.toString(), gate: gate.toString, date: new Date()});
    });
}, 30000);
