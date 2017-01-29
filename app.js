var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var users = [];
var connections = [];
var PORT = process.env.PORT || 3000;
server.listen(PORT, function(){
    console.log("Server running on port ", PORT);
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});