/**
 * Created by likai on 16/3/21.
 *
 */


var fs = require('fs');
var request = require('request');
var data = fs.readFileSync('./relist.dat','utf-8');
var lines = data.split("\n");
console.log(lines.length);
var i = 0;

//隔两秒读一次，主要是为了读文件后的其他耗时操作
var interval = setInterval(function(){
    console.log(i);
    if(i>lines.length-1){
        console.log('time to go!!!');
        clearInterval(interval);
    }

    download(lines[i],'d2')

    i++;




},5000);

