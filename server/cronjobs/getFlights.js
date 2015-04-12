var cheerio = Meteor.npmRequire('cheerio');
var source_url = "http://flydata.avinor.no/XmlFeed.asp?TimeFrom=1&TimeTo=2&airport=OSL&direction=D";

// Is triggered every 5 minutes
Meteor.setInterval(function() {

    var cachedFlights = Flights.find().count();
    // Delete everything older than 1 days, if more than 40 entries in db

    if(articlesInDb >= 40){
        var dateFilter = new Date();
        dateFilter.setDate(dateFilter.getDate() - 1);
        NewsEntries.remove({date: {$lt: dateFilter}})
    }

    // GET breaking news RSS feed
    var result = Meteor.http.get(breaking_url);
    // Load content into cheerio
    $ = cheerio.load(result.content);
    // Get all entries
    var entries = $('entry');
    // For each entry
    $(entries).each(function(i, entry) {
        var $ = cheerio.load(entry);
        var title = $('title').text();
        var link = $('link').attr('href');
        var summary = $('summary').text();
        var id = $('id').text();
        // If id not in db
        if(NewsEntries.find({id: id}).count() === 0)
            NewsEntries.insert({title: title, link: link, summary: summary, id: id, date: new Date()});
    });
}, 300000);
