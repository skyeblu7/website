
port = 443;
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));


app.post('/loginout', urlencodedParser, function(req, res){
	res.render('loginout', {data: req.body});
	console.log(req.body);
});

app.get('/', function(req,res){
	res.render('index');
});


app.get('/mainpage', function(req,res){
	res.render('mainpage');
});
app.get('/beginnerpractice', function(req,res){
	res.render('beginnerpractice');
});
app.get('/guidedprojects', function(req,res){
	res.render('guidedprojects');
});
app.get('/scoreboard', function(req,res){
	res.render('scoreboard');
});
app.get('/runasimulation', function(req,res){
	res.render('runasimulation');
});
app.get('/loginout', function(req,res){
	res.render('loginout');
});
app.get('/myprofile/:name', function(req,res){
	var personal = {age: 69, job: 'ninja', hobbies: ['eating', 'sleeping', 'ece']};
	res.render('myprofile', {person: req.params.name, personal: data});
});


app.get('/ACM-sigarch-logo.png', function(req,res){
	res.sendFile(__dirname + '/assets/ACM-sigarch-logo.png');
});


app.listen(port);




