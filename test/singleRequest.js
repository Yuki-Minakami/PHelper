/**
 * Created by likai on 2017/5/18.
 */
import test from 'ava';

var createOption = require("../getURL/header");
var parse = require("../getURL/parseRes");
var request = require("request");
var RequestId = require("../getURL/worker");


test.cb("http request test",function(t){
    var id = "40002784"
    var option = createOption(id);
    request(option,function(err,response){
        if(err){
            console.log("error");
        }
        t.true(response.statusCode == 200);
        t.end();
    });
})


test.cb("parse request",function(t){
    var id = "63149181";
    var option = createOption(id);
    request(option,function(err,response){
        if(err){
            console.log("error");
        }
        var data = parse.processPage(id,response);
        t.true(data.count > 10000);
        t.end();
    });
})

