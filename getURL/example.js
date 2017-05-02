var createHeader = require("./requestHeader");
var request = require("request");
var parseRes = require('./parseRes');



var option = createHeader(62536564)
console.log("begin time :",process.uptime());
request(option,function(err,response){
    if(err){
        console.log("error");
    }
    if(response.statusCode == 200){
       // console.log(response.body);
        parseRes.processPage(response)
        console.log("success,end time:",process.uptime());
    }else{
        console.log("get http response error,check your network");
    }
});

