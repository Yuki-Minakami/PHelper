/**
 * Created by likai on 2017/4/6.
 */
var fs = require('fs');
var request = require('request');
var download = require("./download");
var async = require("async");
var data = fs.readFileSync('url.dat','utf-8');//一次性将整个文件读入内存
var lines = data.split("\n");//按换行符建立数组
var arr = [];

for(let j =0;j<lines.length;j++) {
    if (lines[j] && JSON.parse(lines[j]).url) {
        var obj = JSON.parse(lines[j]);
        var url = obj.url;
        arr.push(url);
    }
}


//使用mapLimit方法，将并发数控制在10个
async.mapLimit(arr,10,download,function(err,results){
    if(err){console.log(err); return;}
    console.log("finished");
});



