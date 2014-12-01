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


var audience = require('./controller/audience'),
    speaker = require('./controller/speaker');

app.get('/', function(req, res) {
    res.render('top.ect');
});
app.get('/audience', audience.index);
app.get('/speaker', speaker.index);

io.on('connection', function (socket) {
  var count = 1;
  socket.on('uh-huh', function (data) {
      console.log(count++, data);
    });
});
