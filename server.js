var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var players = require('./routes/player');
var clubs = require('./routes/club');

app.use(bodyParser.urlencoded({
    extended: true
}));

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(bodyParser.json());
app.use(players);
app.use(clubs);

app.use(function(req, res) {
    res.status(404);
    res.send({ 'msg': 'Page Not Found' });
});


app.listen(process.env.PORT || 3000);