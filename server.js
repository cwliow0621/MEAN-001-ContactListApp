var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);

app.use(express.static(__dirname + "/public"));

app.get('/contactlist',
    function(req, res) {
        console.log("I received a Get request");
        person1 = {
            name: 'Tim',
            email: 'kenling@gmail.com',
            number: '(111) 111-1111'
        };

        person2 = {
            name: 'Emily',
            email: 'emily@gmail.com',
            number: '(222) 222-2222'
        };

        person3 = {
            name: 'John',
            email: 'john@email.com',
            number: '(333) 333-3333'
        };
        var contactlist = [person1, person2, person3];
        res.json(contactlist);
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