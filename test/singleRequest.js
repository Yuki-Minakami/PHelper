/**
 * Created by likai on 2017/5/18.
 */
import test from 'ava';

var createOption = require("../getURL/header");
var parse = require("../getURL/parseRes");
var request = require("request");
var RequestId = require("../getURL/worker");


test.cb("http request test",function(t){
    var option = createOption("46718715");
    request(option,function(err,response){
        if(err){
            console.log("error");
        }
        t.true(response.statusCode == 200);
        t.end();
    });
})

