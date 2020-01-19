var express = require('express');
var app = express();

app.get('/',function(res,req) {
        req.sendFile("/home/ubuntu/website/dev/home.html");
})
var port = 443;
app.listen(port);
console.log('Listening on port', port);
