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
            Applicatons.insert({name: applications[i].name, slug: applications[i].slug});
        }
    }
});