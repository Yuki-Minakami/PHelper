/**
 * Created by likai on 16/3/12.
 */
var req = /\{"count":"[0-9]+","tag":"うごイラ"\}/;
var string = '{"count":"118463","tag":"うごイラ"}';

console.log(req.exec(string));
