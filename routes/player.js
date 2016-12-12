var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = require('../config/config.js').mongodb;
var players = require('../config/config.js').players;

//get all players
app.get('/api/players', function(req, res) {

    MongoClient.connect(url, function(err, db) {

    	db.collection(players).find({}).toArray(function(err, data) {

        	res.send(data);
        	db.close();
    	});
	});
});

// get /id and it will select one specific player
app.get('/api/players/:id', function(req, res) {

    MongoClient.connect(url, function(err, db) {

        db.collection(players).findOne({'_id' : ObjectId(req.params.id)}, function(err, data) {
            
            res.send(data);
            db.close();
        });
    });
});

// delete, /id and it will delete one specific player
app.delete('/api/players/:id', function(req, res) {

    MongoClient.connect(url, function(err, db) {

        db.collection(players).remove(req.body, function(err, data) {

            res.send({ 'msg': 'Player deleted' });
            db.close();
        });
    });
});

// post creates a new player
app.post('/api/players', function(req, res) {
    MongoClient.connect(url, function(err, db) {


        db.collection(players).insert(req.body, function(err, data) {
            
            res.send({"msg" : "Player created"});
            db.close();
        });
    });
});

//put /id updates a specific player
app.put('/api/players/:id', function(req, res) {

    MongoClient.connect(url, function(err, db) {

        db.collection(players).update({'_id' : ObjectId(req.params.id)}, {$set: req.body}, function(err, data) {
            
            res.send({"msg" : "Player updated"});
            db.close();
        });
    });
});

//Get all players with same club
app.get('/api/players/clubs/:id', function(req, res) {
    MongoClient.connect(url, function(err, db) {

        db.collection(players).find({'clubId' : req.params.id}).toArray(function(err, data) {
            res.send(data);
            db.close();
        });
    });
});


module.exports = app;







