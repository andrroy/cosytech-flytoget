var queueTime = "0";

var url = "https://avinor.no/Api/QueueTime/OSL?language=no&_=1425427077776";

updateQueueTime = function() {
    // GET queue time from Avinor API
    var result = Meteor.http.get(url);
    var responseObject = JSON.parse(result.content);

    queueTime = responseObject.QueueTime.replace ( /[^\d.]/g, '' );
};

getQueueTime = function() {
    return queueTime;
};

// Is triggered every minute
Meteor.setInterval(updateQueueTime, 60000);