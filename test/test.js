/**
 * Created by likai on 2017/5/18.
 */
import test from 'ava';

var createOption = require("../getURL/requestHeader");
var parse = require("../getURL/parseRes");
var request = require("request");

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


test.cb("http request test",function(t){
    var option = createOption("46718715");
    request(option,function(err,response){
        if(err){
            console.log("error");
        }
        var result = parse.processPage("46718715",response);
        //console.log(result);

        t.regex(result.url,new RegExp('[\s\S]*jpg'));
        t.end();
    });
});