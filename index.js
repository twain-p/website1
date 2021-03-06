// Modules
var http = require('http');
var webpages = require('./webpages');

var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    // res and req will be sent as references
    if (req.method = 'GET') {
        if (req.url == '/') { // If the url is empty, == because req.url may not be string or whatever
            webpages.Home(req, res);
        }
    }
}).listen(port);
