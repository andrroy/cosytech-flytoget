Applicatons = new Mongo.Collection("applications");

Applicatons.allow({
    insert: function (userId, application) {
        return userId && application.owner === userId;
    },
    update: function(userId, application, fields, modifier){
        if(userId != application.owner)
            return;

        return true;
    },
    remove: function(userId, application){
        if(userId != application.owner)
            return;
        return true;
    }
});