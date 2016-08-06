var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);

app.use(express.static(__dirname + "/public"));

app.get('/contactlist',
    function(req, res) {
        db.contactlist.find(function(err, docs) {
            console.log(docs);
            res.json(docs);
        });
    });

app.post('/contactlist',
    function(req, res) {
        console.log(req.body);
    });
//running at command
//app.get('/',
//    function(req, res) {
//        res.send("Hello world from server.js ");
//    });

app.listen(3000);
console.log("Server running on port 3000");


//var http = require('http');
//var port = process.env.port || 1337;
//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);