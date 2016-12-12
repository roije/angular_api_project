/**
 * Created by roije on 12/12/2016.
 */
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var express = require('express');
var app = express();
var url = require('../config/config').mongodb;
var clubs = require('../config/config').clubs;

//Route for creating a club
app.post('/api/clubs', function(req, res){

   MongoClient.connect(url, function(err, db) {

       db.collection(clubs).insertOne(req.body, function(err, data) {
           res.json({"msg" : "product created"});
           db.close();
       })

   })

});

//Route for getting clubs
app.get('/api/clubs', function(req, res) {

    MongoClient.connect(url, function(err, db){

        db.collection(clubs).find({}).toArray(function(err, data) {
            res.json(data);
            db.close();
        })

    })

});

//Route for getting single club
app.get('/api/clubs/:id', function(req, res){
    MongoClient.connect(url, function(err, db){
        db.collection(clubs).findOne({ '_id' : ObjectId(req.params.id) }, function(err, data) {
            res.json(data);
            db.close();
        })
    })
});

app.delete('/api/clubs/:id', function(req, res) {
    MongoClient.connect(url, function(err, db){
        db.collection(clubs).deleteOne({ '_id' : ObjectId(req.params.id) }, function(err, data){
            res.json({ message : 'Club deleted'});
            db.close();
        })
    })
});

app.put('/api/clubs/:id', function(req, res) {
    MongoClient.connect(url, function (err, db) {
        db.collection(clubs).updateOne({ '_id' : ObjectId(req.params.id)}, {$set : req.body}, function(err, data) {
            res.json({ 'msg' : 'Club updated'});
            db.close();
        })
    })
});

module.exports = app;