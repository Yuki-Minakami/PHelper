/**
 * Created by likai on 2017/4/29.
 */

var fs = require('fs');
var createHeader = require("./header");
var request = require("request");
var parseRes = require("./parseRes.js");
var bluebird = require("bluebird");

//自己封装的promise

var rp = function(header){
   return new Promise(function(resolve,reject){
        request(header,function(err,response){
            if(err){
                reject(err);
            }
            else{
                resolve(response);
            }
        });
    });
}

//也可以
//var rp = bluebird.promisify(request);


async function RequestId(id){
    console.log(id);
    var option = createHeader(id.toString());
    let response =  await rp(option).catch(function(err){
                        console.log("err");
                    });
    if(response.statusCode == 200){
        return parseRes.processPage(id,response);
    }else{
        console.log("warning:get http response exception");
        return undefined;
    }
}

module.exports = RequestId;



