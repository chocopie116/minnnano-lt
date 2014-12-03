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

var talk = require('./model/talk').findCurrent();
app.get('/', function(req, res) {
    res.render('top');
});

/**
 * 現在のトークにへぇを押す画面を出力
 */
app.get('/talk', function(req, res) {
    res.render('talk', {count: talk.getCount(), speaker: talk.getSpeaker()});
});

/**
 * 現在の問題を変更する
 */
app.get('/talk/create', function(req, res) {
    //同じ人なら変更しない
    var result = talk.nextSpeaker(req.query.name);
    if (!result) {
        res.send('二重投稿です');
    }

    res.send('発表者は' + talk.getSpeaker() + 'になりました');
});

var count = 0;
io.on('connection', function (socket) {
  socket.on('uh-huh', function (data) {
      var count = talk.countUp();
      io.emit('test', count);
  });
});
