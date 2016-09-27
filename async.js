/**
 * Created by likai on 西暦16/01/05.
 */
var async = require('async');
var fs = require('fs');

var data = fs.readFileSync('1.txt');


var lines = data.split("\n");


var i = 0;
//隔两秒读一次，主要是为了读文件后的其他耗时操作
var interval = setInterval(function(){
    get_line(i,i+5);
    i+=5;

    if(i>lines.length){
        console.log('time to go!!!');
        clearInterval(interval);
    }

},2000);