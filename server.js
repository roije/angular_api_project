var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var players = require('./routes/player.js');


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(player);


app.use(function(req, res) {
    res.status(404);
    res.send({ 'msg': 'Page Not Found' });
});


app.listen(process.env.PORT ||3000);