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
    // A bit overkill, but it's super important that this is run after the two others...
    if(Flights.find().count() === 0){
        getFlights(function () {
            console.log("Flights loaded cached in database...");

            // Is triggered every 5 minutes
            Meteor.setInterval(getFlights(), 300000);

        });
    }

    if(MiniAirlines.find().count() === 0){
        var airlines = [
            {'name': 'Finnair','icon':'finnair'},
            {'name': 'Turkish Airlines','icon':'turkish'},
            {'name': 'Tap Portugal','icon':'tap'},
            {'name': 'Air France','icon':'airfrance'},
            {'name': 'Widerøe','icon':'wid'},
            {'name': 'KLM','icon':'klm'},
            {'name': 'SAS','icon':'sas'},
            {'name': 'Lufthansa','icon':'lufthansa'},
            {'name': 'Thomas Cook','icon':'thomascook'}
        ];

        for(var i = 0; i<airlines.length; i++){
            MiniAirlines.insert({name: airlines[i].name, icon: airlines[i].icon});
        }
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