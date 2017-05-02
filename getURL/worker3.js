/**
 * Created by likai on 2017/4/29.
 */

var fs = require('fs');
var createHeader = require("./requestHeader");
var request = require("request");

var parseRes = require("./parseRes.js");
var begin =  Number(process.argv[2]);
var end = Number(process.argv[3]);
console.log('begin:',begin,'end:',end);

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

async function RequestId(id){
    console.log(id);
    var option = createHeader(id.toString());
    await rp(option).then(function(response){
        if(response.statusCode == 200){
            parseRes.processPage(response);
        }else{
            console.log(begin," warning:get http response exception ");
        }
    }).catch(function(err){
        console.log("err");
    });

}

async function RequestTest() {
    for (let i = begin; i < end; i++) {
        await RequestId(i);
    }
    process.exit();
}

RequestTest();


