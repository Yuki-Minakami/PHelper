/**
 * Created by likai on 2017/4/4.
 */
var fs = require("fs");
var readline = require("readline");
var rl = readline.createInterface({
    input:fs.createReadStream("img5.dat")
});
rl.on("line",function(line){
    if(line && JSON.parse(line).url) {
        var obj = JSON.parse(line);
        var url = obj.url;
        download(url,'image');
    }else{
        return;
    }
});
