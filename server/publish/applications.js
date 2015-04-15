Meteor.publish("applications", function () {
    return Applicatons.find({});
});

Meteor.publish("mini-airlines", function () {
    return MiniAirlines.find({});
});