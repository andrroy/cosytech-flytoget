Meteor.publish("applications", function () {
    return Applicatons.find({});
});