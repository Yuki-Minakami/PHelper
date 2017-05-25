/**
 * Created by likai on 西暦16/01/27.
 */
var fs = require('fs');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pixiv');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {

});

var urlSchema = new mongoose.Schema({
    url:String,
    viewCount:String,
    tag:String

});
var urlList = db.model("urlList",urlSchema,"url");




var persist = {
    saveToJson:function(data){
        data+='\n';
        fs.writeFileSync('./url2.dat',data,{flag:'a'});
    },
    saveToDB:function(url,viewCount,tag){
        var query = new urlList({url:url,viwCount:viewCount,tag:tag});
        query.save(function(err){
            if(err) return;
            console.log("insert done");
        })
    },
    savePic:function(){

    }


}

module.exports = persist;