/**
 * Created by likai on 2017/5/25.
 */

import test from 'ava';

var createOption = require("../getURL/header");
var parse = require("../getURL/parseRes");
var request = require("request");
var RequestId = require("../getURL/worker");


test.cb("parse url",function(t){
    var option = createOption("46718715");
    request(option,function(err,response){
        if(err){
            console.log("error");
        }
        var result = parse.processPage("46718715",response);

        t.regex(result.url,new RegExp('[\s\S]*jpg'));
        t.end();
    });
});

