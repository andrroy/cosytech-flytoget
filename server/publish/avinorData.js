//The name [airlines] is what the client have to use in order to subscribe

Meteor.publish("airlines", function (options, searchString) {

    if(searchString == null){
        searchString = '';
    }

    Counts.publish(this, "numberOfAirlines", Airlines.find({
        'name' : { '$regex' : '.*' + searchString || '' + '.*', '$options' : 'i' }
        /*$or: [
            // If our party is public and if it actually exist.
            {$and:[
                {"public": true},
                {"public": {$exists: true}}
            ]}, // OR
            // If we are the owner, and if owner actually exist.
            {$and:[
                {"owner": this.userId},
                {"owner": {$exists: true}}
            ]}
        ]*/
    }), {noReady: true});

    return Airlines.find({
        'name' : { '$regex' : '.*' + searchString || '' + '.*', '$options' : 'i' }
        /*$or: [
            // If our party is public and if it actually exist.
            {$and:[
                {"public": true},
                {"public": {$exists: true}}
            ]}, // OR
            // If we are the owner, and if owner actually exist.
            {$and:[
                {"owner": this.userId},
                {"owner": {$exists: true}}
            ]}
        ]*/}, options );
});


Meteor.publish("flights", function (options, searchString) {

    if(searchString == null){
        searchString = '';
    }

    Counts.publish(this, "numberOfFlights", Flights.find({
        'flight_id' : { '$regex' : '.*' + searchString || '' + '.*', '$options' : 'i' }
        /*$or: [
         // If our party is public and if it actually exist.
         {$and:[
         {"public": true},
         {"public": {$exists: true}}
         ]}, // OR
         // If we are the owner, and if owner actually exist.
         {$and:[
         {"owner": this.userId},
         {"owner": {$exists: true}}
         ]}
         ]*/
    }), {noReady: true});

    return Flights.find({
        'flight_id' : { '$regex' : '.*' + searchString || '' + '.*', '$options' : 'i' }
        /*$or: [
         // If our party is public and if it actually exist.
         {$and:[
         {"public": true},
         {"public": {$exists: true}}
         ]}, // OR
         // If we are the owner, and if owner actually exist.
         {$and:[
         {"owner": this.userId},
         {"owner": {$exists: true}}
         ]}
         ]*/}, options );
});