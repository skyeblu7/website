var express = require('express');
var app = express();

app.get('/',function(res,req) {
        res.sendFile("/home/ubuntu/website/stable/home.html");
})
var port = 80;
app.listen(port);
console.log('Listening on port', port);
