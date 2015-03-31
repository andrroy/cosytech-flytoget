Airlines = new Mongo.Collection("airlines");

Airlines.allow({
    insert: function(userId, airline){
        return userId && airline.owner === userId;
    },
    update: function (userId, airline, fields, modifier) {
        if(userId != airline.owner)
            return;

        return true
    },
    remove: function (userId, airline) {
        if(userId != airline.owner)
            return;

        return true
    }
});