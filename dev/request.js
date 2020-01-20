
var http = require('http');
var fs = require('fs'); 
var port = 443;


var server = http.createServer(function (req, res) {
	console.log('request was made: ' + req.url);

	if(req.url === '/'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		var myReadStream = fs.createReadStream(__dirname + '/html/home.html');
		myReadStream.pipe(res);
	}
	else if(req.url === '/image/ACM-sigarch-logo.png'){
		res.writeHead(200, {'Content-Type': 'text/plain'});
		fs.createReadStream(__dirname + req.url).pipe(res);
	}
	else{
		res.writeHead(200, {'Content-Type': 'text/html'});
		var myReadStream = fs.createReadStream(__dirname + '/html' + req.url + '.html');
		myReadStream.pipe(res);
	}

	
	
});

server.listen(port); 

console.log('Listening on port', port);














/*

var server = http.createServer(function (req, res) {
	fs.readFile('/home/ubuntu/website/dev/index.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
})

server.listen(port); 

console.log('Listening on port', port);
console.log(__dirname);

*/

/*
var express = require('express');
const path = require('path');
var app = express();

app.get('/',function(req,res) {
        res.sendFile("/home/ubuntu/website/dev/home.html");
})

app.get('/test', (rq, rs) => {
	rs.set('Content-Type', 'img/gif');
	rs.sendFile(path.join(__dirname, 'images/test.gif'));
})

var port = 443;
app.use(express.static(path.join(__dirname, 'images')));
app.listen(port);
console.log('Listening on port', port);
console.log(__dirname)
*/

