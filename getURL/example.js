var createOption = require("./requestHeader");
var request = require("request");

var option = createOption("46718715");
console.log("begin time :",process.uptime());
request(option,function(err,response){
    if(err){
        console.log("error");
    }
    console.log(response.body);
    console.log("end time:",process.uptime());
});
