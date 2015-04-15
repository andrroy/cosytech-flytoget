var fs = Meteor.npmRequire('fs');
var https = Meteor.npmRequire('https');

var url = "https://tjenester.avinor.no/internalservice-1.0/webcams/OSL/0";

var basePath = process.env.PWD;

updateCamfeed = function() {
    var file = fs.createWriteStream(basePath + "/public/camfeed.jpeg");

    var request = https.get(url, function(response) {
        response.pipe(file);
        file.on('finish', function () {
            file.close();
        })
    });
};

// Update feed every 30 seconds
Meteor.setInterval(updateCamfeed, 30000);