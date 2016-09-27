/**
 * Created by likai on 西暦16/01/25.
 */
var fs = require('fs');
var fetch = require('./fetch.js');

console.log('worker1 begin');

var begin =  Number(process.argv[2]);
var end = Number(process.argv[3]);
console.log('begin:',begin);
var i = begin;

var test = setInterval(function(){
    console.log(i);
    if(i>end) {
        clearInterval(this);
        process.exit(1);
    }
    fetch(i,i+10);
    i=i+10;
},2000);


