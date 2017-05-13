var fs = require('fs');

exports.Home = function (req, res) { // References
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('./pages/home.html').pipe(res);
}
