var express = require('express'),
    app = express(),
    ECT = require('ect'),
    port = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ect');
app.engine('ect', ECT({ watch: true, root: __dirname + '/views', ext: '.ect'}).render);

var server = app.listen(port, function() {
    console.log('listhened the port');
});


var home = require('./controller/home');
app.get('/', home.index);