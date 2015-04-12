var fs = Meteor.npmRequire('fs');
var https = Meteor.npmRequire('https');
var path = Meteor.npmRequire('path');

var url = "https://tjenester.avinor.no/internalservice-1.0/webcams/OSL/0";

var file = fs.createWriteStream("/tmp/test.jpeg");
var request = https.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function () {
        file.close();
    })
});
