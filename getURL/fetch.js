/**
 * Created by likai on 西暦16/01/25.
 */
var async = require('async'),
    request = require('request'),

    parseRes = require('./parseRes.js'),
    createRequestParams = require('./requestHeader.js');



function fetchImg(begin,end) {
    var i =0;
    var options = [];
    for(i=begin;i<end;i++){
        options.push(createRequestParams(i));
    }
    async.map(options,request,function(err,response){
        if(err){
            console.log(err);
        }
        for(i=0;i<options.length;i++){
            parseRes.processPage(err,response[i])
        }
    });
}

module.exports = fetchImg;