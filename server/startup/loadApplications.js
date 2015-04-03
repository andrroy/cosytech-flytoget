Meteor.startup(function(){
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


    if(Airlines.find().count() === 0){
        var airlines = [
            {'name': 'Finnair','icon':'someicon.png'},
            {'name': 'Turkish Airlines','icon':'someicon.png'},
            {'name': 'Tap Portugal','icon':'someicon.png'},
            {'name': 'Air France','icon':'someicon.png'},
            {'name': 'Widerøe','icon':'someicon.png'},
            {'name': 'KLM','icon':'someicon.png'},
            {'name': 'SAS','icon':'someicon.png'},
            {'name': 'Lufthansa','icon':'someicon.png'},
            {'name': 'Norwegian','icon':'someicon.png'},
            {'name': 'South African','icon':'someicon.png'},
            {'name': 'Svenskefly','icon':'someicon.png'},
            {'name': 'American Wings','icon':'someicon.png'},
            {'name': 'Flight Simulator','icon':'someicon.png'},
            {'name': 'Haiti Air','icon':'someicon.png'},
            {'name': 'Thai Airways','icon':'someicon.png'}
        ];

        for(var i = 0; i<airlines.length; i++){
            Airlines.insert({name: airlines[i].name, icon: airlines[i].icon});
        }
    }
});