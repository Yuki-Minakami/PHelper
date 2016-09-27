/**
 * Created by likai on 16/3/21.
 */
/**
 * Created by likai on 16/3/21.
 */
var fs = require('fs');
var data = fs.readFileSync('url.dat','utf-8');

var lines = data.split("\n");
console.log(lines.length);



function clear(path){
    var files = fs.readdirSync(path);

    var i=0;
    var ud = []
    for(var j = 0;j<files.length;j++){

        var state = fs.statSync(path+ '/' +files[j]);
        if(state.size<100){
            ud.push(files[j]);

        }
    }

    return ud;
}

var ud = clear('./image');

//console.log(ud);


function getUrl(){
    var urlList = [];
    for(var i = 0;i<lines.length;i++){
        if(lines[i] && JSON.parse(lines[i]).url) {
            var obj = JSON.parse(lines[i]);
            var url = obj.url;
            var id= url.substring(url.lastIndexOf('/')+1,url.indexOf('_'));
            for(var j =0;j<ud.length;j++){
                if(ud[j] == (id+'.jpg')){
                    var data = obj.url;
                    data+='\n';
                    fs.writeFileSync('./relist.dat',data,{flag:'a'});
                }
            }
        }else{
            continue;
        }
    }


}

getUrl();