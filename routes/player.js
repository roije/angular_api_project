var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = require('../config/config.js').mongodb;

//get all players
app.get('/api/players', function(req, res) {

    MongoClient.connect(url, function(err, db) {

    	var collection = db.collection('players');

    	collection.find({}).toArray(function(err, data) {

        	res.send(data);
        	db.close();
    	});
	});
});

// get /id and it will select one specific player
app.get('/api/players/:id', function(req, res) {

    MongoClient.connect(url, function(err, db) {

        var collection = db.collection('players');

        collection.findOne({'_id' : ObjectId(req.params.id)}, function(err, data) {
            
            res.send(data);
            db.close();
        });
    });
});

// delete, /id and it will delete one specific player
app.delete('/api/players/:id', function(req, res) {

    MongoClient.connect(url, function(err, db) {

        var collection = db.collection('players');

        collection.remove(req.body, function(err, data) {

            res.send({ 'msg': 'user deleted' });
            db.close();
        });
    });
});

// post creates a new player
app.post('/api/players', function(req, res) {
    MongoClient.connect(url, function(err, db) {

        var collection = db.collection('players');

        collection.insert(req.body, function(err, data) {
            
            res.send({"msg" : "user created"});
            db.close();
        });
    });
});

//put /id updates a specific player
app.put('/api/players/:id', function(req, res) {

    MongoClient.connect(url, function(err, db) {

        var collection = db.collection('players');

        collection.update({'_id' : ObjectId(req.params.id)}, {$set: req.body}, function(err, data) {
            
            res.send({"msg" : "user updated"});
            db.close();
        });
    });
});


module.exports = app;







