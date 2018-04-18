/**
 * Created by likai on 2017/8/18.
 */

var fs= require("fs");
var Config = require("../config.js");

var count = 0;
var temMsg = '';
function persist(msg){

    temMsg += (msg+'\n');
    count++;
    if(count > 20){
        save(temMsg);
        temMsg = '';
        console.log(count + " saved");
        count = 0;
    }
}

function save (data){
    switch (Config.defaultPersistSolution){
        case "file":
            fs.writeFileSync(Config.saveFilePath,data,{flag:'a'});
        //add more options
    }
}



 module.exports = persist;