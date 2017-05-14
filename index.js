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
        else if (req.url == "/styles") {
            webpages.Styles(req, res);
        }
        else if (req.url == "/trailers") {
            webpages.Trailers(req, res);
        }
        else if (req.url.substring(0, 13) == "/tescotrailer") {
            webpages.TescoTrailer(req, res);
        }
        else if (req.url == "/navbar") {
            webpages.Navbar(req, res);
        }
        else {
            webpages.NotFound(req, res);
        }
    }
}).listen(port);
