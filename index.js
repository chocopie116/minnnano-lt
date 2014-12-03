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


var event = require('./controller/event');

app.get('/', function(req, res) {
    res.render('top.ect');
});

/**
 * 現在のトークにへぇを押す画面を出力
 */
app.get('/talk', function(req, res) {
    res.render('event');
});

/**
 * 現在の問題を変更する
 */
app.get('/talk/create', function(req, res) {
    //同じ人なら変更しない
    //console.log(req.query.key);
    //res.render('event');
    //resetする
    //talk->clear
    //talk->update
});

var count = 0;
io.on('connection', function (socket) {
  socket.on('uh-huh', function (data) {
      count++;
      io.emit('test', count);
  });
});
