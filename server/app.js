/**
 * Created by likai on 16/3/12.
 */
var express = require('express');
var db = require('monk')('localhost/pixiv');
var Q =require('q');
var async = require('async');
var base64 = require('node-base64-image');
var app = express();

var config = require('./config.js');

app.use(express.static('public'));
var doc2 = [];


app.get('/pixiv',function(req,res){

    var collectionParam = req.query.collection;

    var collection = db.get(collectionParam);
    var promise = collection.find({tag:/艦/},{limit:30});
    promise.on('complete',function(err,doc){
        var count = 0;

        for(var i =0;i< doc.length;i++){
            var url = doc[i].url;
            var id= url.substring(url.lastIndexOf('/')+1,url.indexOf('_'));
            doc[i].url = config.picServer+'/image/'+id+'.jpg';

        }
        console.log(doc);

        async.whilst(
            function () { return count < (doc.length-1); },
            function (callback) {
                console.log(count);

                var options = {string: true};
                base64.base64encoder(doc[count].url, options, function (err, image) {
                    if (err) {
                        console.log('this is', err);
                    }
                    doc[count].url = image;

                });

                count++;
                setTimeout(function () {
                    callback(null, count);
                }, 1500);
            },
            function (err, n) {
                // 5 seconds have passed, n = 5
                console.log('count is',doc);
                res.json(doc);
            }
        );


       // res.json(doc);

    });


});


function tobase64(path){


    base64.base64encoder(path, options, function (err, image) {
        if (err) { console.log( 'this is',err); }
       doc2[i] = image;
    });
}

//tobase64('./public/image/35700678.jpg');


app.listen(3000);

console.log('listening on 3000');