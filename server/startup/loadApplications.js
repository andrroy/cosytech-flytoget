Meteor.startup(function(){

    if(Airports.find().count() === 0){
        cacheAirports(function () {
            console.log("Airports cached in database...");
        })
    }

    if(Airlines.find().count() === 0){
        cacheAirlines(function(){
            console.log("Airlines cached in database...");
        })
    }

    // Initialize flights
    if(Flights.find().count() === 0){
        getFlights(function () {
            console.log("Flights loaded cached in database...");

            // Is triggered every 5 minutes
            Meteor.setInterval(getFlights, 300000);
        })
    }

    if(Applicatons.find().count() === 0){

        var applications = [
            {'name':'Flight',
                'slug':'flight' },
            {'name':'Entertainment',
                'slug':'entertainment' },
            {'name':'Breaking',
                'slug':'news' },
            {'name':'Useful Info',
                'slug':'info' }
        ];

        for(var i = 0; i<applications.length; i++){
            Applicatons.insert({name: applications[i].name, slug: applications[i].slug, builtIn: 'True'});
        }
    }
});