var cheerio = Meteor.npmRequire('cheerio');
var airport_names = "http://flydata.avinor.no/airportNames.asp";
var airline_names = "http://flydata.avinor.no/airlineNames.asp";

cacheAirports = function (callback) {

    var name_result = HTTP.getWithEncoding(airport_names, {encoding: {"from": "iso-8859-15", "to": "iso-8859-1"}});

    // Load content into cheerio
    $ = cheerio.load(name_result.content);
    // Get all entries
    var airport = $('airportName');
    
     //For each entry
    $(airport).each(function(i, entry) {

        var id = entry.attribs.code;
        var name = entry.attribs.name + "";

        //If id not in db
        if(Airports.find({id: id}).count() === 0)
            Airports.insert({ id: id.toString(), name: name.toString()});
    });
    callback();
};

cacheAirlines = function (callback) {

    var name_result = Meteor.http.get(airline_names);
    // Load content into cheerio
    $ = cheerio.load(name_result.content);
    // Get all entries
    var airport = $('airlineName');

     //For each entry
    $(airport).each(function(i, entry) {

        var id = entry.attribs.code;
        var name = entry.attribs.name + "";

        //If id not in db
        if(Airlines.find({id: id}).count() === 0)
            Airlines.insert({ id: id.toString(), name: name.toString()});
    });
    callback();
};