/**
 * Created by likai on 西暦16/01/25.
 */
var fs = require('fs');
var fetch = require('./fetch.js');

console.log('worker1 begin');

var begin =  Number(process.argv[2]);
var end = Number(process.argv[3]);
console.log('begin:',begin,'end:',end);
var i = begin;

var currentTimeout;
function fetchURL() {
  console.log(i);
  if(i>end) {
    process.exit(1);
    clearTimeout(currentTimeout);
  }
  else {
    debugger
    fetch(i,i+10);
    i=i+10;
    currentTimeout = setTimeout("fetchURL()", 2000);
  }
}
