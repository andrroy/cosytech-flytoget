Meteor.publish("newsEntries", function () {
    return NewsEntries.find({});
});