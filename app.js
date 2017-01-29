var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var users = [];
var connections = [];
var PORT = process.env.PORT || 3000;

var path = "/static";

server.listen(PORT, function(){
    console.log("Server running on port", PORT);
});

app.get('/', function(req, res){
    res.sendFile(__dirname + path + '/index.html');
});

io.sockets.on('connection', function(socket){
    connections.push(socket);
    console.log('Connected: %s sockets connected.', connections.length);
    
    io.socket.on('disconnect', function(){
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected: %s sockets connected.', connection.length);
    });
});