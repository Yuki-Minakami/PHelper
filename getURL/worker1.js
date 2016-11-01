/**
 * Created by likai on 西暦16/01/25.
 */
var fs = require('fs');
var createOption = require("./requestHeader");
var request = require("request");

var parseRes = require("./parseRes.js");
var begin =  Number(process.argv[2]);
var end = Number(process.argv[3]);
console.log('begin:',begin,'end:',end);


function myFunction(){
  console.log(begin);

  var option = createOption(begin.toString());
  console.log("begin time :",process.uptime());

  request(option,function(err,response){
    if(err){
      console.log("error");
      return;
    }
    if(response.statusCode == 200){
      console.log("success,end time:",process.uptime());
      parseRes.processPage(response)
    }else{
      console.log(begin," warning:get http response exception ");
    }
  });

  begin++;
  if(begin < end){
    setTimeout(myFunction, 5000);
  }else{
    process.exit();
  }
}

myFunction()
