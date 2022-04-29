var http = require('http');
var dt = require('./firstmodule')
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('the current time is ' + dt.myDateTime());
    res.end('hello');
}).listen(8080);