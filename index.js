var express = require('express'),
    app = express()
    port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    console.log('hello');
});

var server = app.listen(port, function() {
    console.log('listhend');
});
