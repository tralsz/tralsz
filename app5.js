var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname, { index: 'default.html' }));

//Whenever someone connects this gets executed
io.on('connection', function(socket){
  console.log('A user connected');

  //Whenever someone disconnects this piece of code executed
  socket.on('move', function (msg) {
    socket.broadcast.emit('move', msg);
  });

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});