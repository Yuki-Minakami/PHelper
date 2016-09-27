var fs = require('fs');

function clear(path){
    var files = fs.readdirSync(path);

    var i=0;
    for(var j = 0;j<files.length;j++){

        var state = fs.statSync(path+ '/' +files[j]);
        if(state.size<100){

            i++;
            fs.unlinkSync(path+'/'+files[j]);
        }
    }
    console.log('delete:',path,i);
}

clear('./image');

