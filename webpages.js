var fs = require('fs');

exports.Home = function (req, res) { // References
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('./pages/home.html').pipe(res);
}

exports.Styles = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/css' });
    fs.createReadStream('./css/styles.css').pipe(res);
}

exports.TescoTrailer = function (req, res) {
    var file = __dirname + '/assets/tescotrailer.scs';

    res.setHeader('Content-disposition', 'attachment; filename=trailer.scs');

    var filestream = fs.createReadStream(file);
    filestream.pipe(res);
}

exports.NotFound = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('./pages/404.html').pipe(res);
}

exports.Trailers = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('./pages/trailers.html').pipe(res);
}

exports.Navbar = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('./assets/navbar.html').pipe(res);
}