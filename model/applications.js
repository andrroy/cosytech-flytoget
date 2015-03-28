Applicatons = new Mongo.Collection("applications");
Flight = new Mongo.Collection("flight");


Applicatons.allow({
    insert: function (userId, application) {
        return userId && application.owner === userId;
    },
    update: function(userId, applicaiton, fields, modifier){
        if(userId != applicaiton.owner)
            return;

        return true;
    },
    remove: function(userId, application){
        if(userId != applicaiton.owner)
            return;

        return true;
    }
});