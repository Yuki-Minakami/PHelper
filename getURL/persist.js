/**
 * Created by likai on 西暦16/01/27.
 */
var fs = require('fs');

var persist = {
    saveToJson:function(data){
        data+='\n';
        fs.writeFileSync('./url.dat',data,{flag:'a'});
    },
    saveToDB:function(){

    },
    savePic:function(){

    }


}

module.exports = persist;