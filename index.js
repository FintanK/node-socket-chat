var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/chat.css', function(req, res){
  res.sendFile(__dirname + '/chat.css');
});

io.on('connection', function(socket){
  socket.on('message', function(msg){
    io.emit('message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
