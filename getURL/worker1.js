/**
 * Created by likai on 西暦16/01/25.
 */
var fs = require('fs');
var createHeader = require("./requestHeader");
var request = require("request");

var parseRes = require("./parseRes.js");
var begin =  Number(process.argv[2]);
var end = Number(process.argv[3]);
console.log('begin:',begin,'end:',end);
var tmp = begin;
function RequestID(){
  console.log(begin);
  var option = createHeader(begin.toString());
  request(option,function(err,response){
    if(err){
      console.log("error");
      return;
    }
    if(response.statusCode == 200){
      parseRes.processPage(response)
    }else{
      console.log(begin," warning:get http response exception ");
    }
  });

  begin++;
  if(begin< end){
    if(begin -tmp == 5){
      setTimeout(RequestID, 5000);
      tmp = begin;
    }else{
      RequestID()
    }
  }else{
    process.exit();
  }
}
RequestID()
