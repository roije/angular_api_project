var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var players = require('./routes/player');
var clubs = require('./routes/club');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(players);
app.use(clubs);

app.use(function(req, res) {
    res.status(404);
    res.send({ 'msg': 'Page Not Found' });
});


app.listen(process.env.PORT || 3000);