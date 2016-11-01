var createOption = require("./requestHeader");
var request = require("request");


var option = createOption("45358677")
console.log("begin time :",process.uptime());
    request(option,function(err,response){
        if(err){
            console.log("error");
        }
        if(response.statusCode == 200){
            console.log("success,end time:",process.uptime());
            console.log(response.body);
        }else{
            console.log("get http response error,check your network");
        }
    });

