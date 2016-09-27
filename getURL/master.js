/**
 * Created by likai on 西暦16/01/25.
 */
var child_process = require('child_process');

var fs = require('fs');

var begin = 306;
var end  = 549;

var tmp = 40100000;
var process  = [];
var status =[];

function start() {
   for (var i = 0; i < 5; i++) {
        process[i] = child_process.fork('worker1.js', [tmp, tmp+50000]);
        tmp+=50000;

   }

        process[0].on('exit', function () {
            console.log('process exit');

            process[1].kill();
            process[2].kill();
            process[3].kill();
            process[4].kill();
            start();
        });






}

start();

console.log('master begin');