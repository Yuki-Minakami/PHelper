/**
 * Created by likai on 2017/4/29.
 */

var createHeader = require("./requestHeader");
var request = require("request");

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

async function RequestId(url){
    var option = createHeader(url);
    await rp(option).then(function(response){
        if(response.statusCode == 200){
            //parseRes.processPage(id,response);
            console.log(url + " success");
        }else{
            console.log(begin," warning:get http response exception ");
        }
    }).catch(function(err){
        console.log("err");
    });

}

module.exports = RequestId;


