//The name [airlines] is what the client have to use in order to subscribe
/*Meteor.publish("airlines", function (options) {

    // The publish-counts package creates a meteor collection called counts
    //console.log("Publishing!");

    Counts.publish(this, "numberOfAirlines", Airlines.find({}), {noReady: true});

    return Airlines.find({}, options);
});*/

//Example of selective publish with mongo query:
Meteor.publish("airlines", function (options) {

    console.log("Publishing!");

    Counts.publish(this, "numberOfAirlines", Airlines.find({
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

    console.log("options:");
    console.log(options);

    return Airlines.find({
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
