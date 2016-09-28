/**
 * Created by likai on 16/3/21.
 * 因为带宽，目标服务器限制等因素，有些图片在下载的过程中会出现问题，因此先遍历下载的图片文件夹，如果文件大小过小则
 *判为下载失败，将其写入relist.dat文件
 *
 */
var fs = require('fs');
var data = fs.readFileSync('url.dat','utf-8');

var lines = data.split("\n");
console.log(lines.length);



function findInvalidImg(path){
    var files = fs.readdirSync(path);
    var i=0;
    var invalidImgList = []
    for(var j = 0;j<files.length;j++){

        var state = fs.statSync(path+ '/' +files[j]);
        if(state.size<100){
            invalidImgList.push(files[j]);

        }
    }

    return invalidImgList;
}

function writeInvalidImg(){

    var ud = findInvalidImg('./image');

    for(var j =0;j<ud.length;j++){
        data+='\n';
        fs.writeFileSync('./relist.dat',data,{flag:'a'});
    }


}

getUrl();