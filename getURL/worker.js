/**
 * Created by likai on 2017/4/29.
 */

var fs = require('fs');
var createHeader = require("./header");
var request = require("request");
var parseRes = require("./parseRes.js");

var presist = require("./persist");
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
    var option = createHeader(id.toString());
    let response =  await rp(option).catch(function(err){
                        console.log("err",id);
                    });
    if(response && response.statusCode == 200){
        var msg = parseRes.processPage(id,response);
        return msg;
    }else{
      //  console.log(id ,"get http response exception");
        return undefined;
    }
}

module.exports = RequestId;



