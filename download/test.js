var fs = require('fs');
var request = require('request');
var download = require("./download");
var data = fs.readFileSync('url.dat','utf-8');//一次性将整个文件读入内存
var lines = data.split("\n");//按换行符建立数组
console.log(lines.length);
function get_line(begin,end) {
    for(var j =begin;j<end;j++){
        if(lines[j] && JSON.parse(lines[j]).url) {
            var obj = JSON.parse(lines[j]);
            var url = obj.url;
            download(url);
        }else{
            return;
        }
    }
}

var i = 0;
//隔两秒读一次，主要是为了读文件后的其他耗时操作
var interval = setInterval(function(){
    console.log(i);
    if(i>lines.length-5){
        console.log('time to go!!!');
        clearInterval(interval);
    }
    get_line(i,i+2);
    i+=2;



},5000);
