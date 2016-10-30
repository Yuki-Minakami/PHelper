var createOption = require("./requestHeader");
var request = require("request");

var option = createOption("46718715");
console.log("begin time :",process.uptime());
request(option,function(err,response){
    if(err){
        console.log("error");
    }
    //console.log(response.statusCode);
    if(response.statusCode == 200){
        console.log("success,end time:",process.uptime());
    }else{
        console.log("get http response error,check your network");
    }

   // console.log("end time:",process.uptime());

});
