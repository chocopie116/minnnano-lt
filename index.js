var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    path = require('path'),
    ECT = require('ect'),
    port = process.env.PORT || 3000,
    io = require('socket.io')(server);

app.set('views', __dirname + '/views');
app.set('view engine', 'ect');
app.use(express.static(path.join(__dirname, 'public')));
app.engine('ect', ECT({ watch: true, root: __dirname + '/views', ext: '.ect'}).render);

server.listen(port);


var home = require('./controller/home');
app.get('/', home.index);

io.on('connection', function (socket) {
  socket.on('uh-huh', function (data) {
      console.log(data);
    });
});
