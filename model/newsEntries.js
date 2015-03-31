NewsEntries = new Mongo.Collection("newsEntries");

// TODO: Remove this
Applicatons.allow({
    insert: function (userId, application) {
        return true;
    },
    update: function(userId, applicaiton, fields, modifier){
        return true;
    },
    remove: function(userId, application){
        return true;
    }
});