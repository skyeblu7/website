var express = require('express');
var app = express();

app.get('/dev',function(res,req) {
        req.sendFile("/home/ubuntu/test/home.html");
})
var port = 80;
app.listen(port);
console.log('Listening on port', port);