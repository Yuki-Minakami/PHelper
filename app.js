/**
 * Created by likai on 16/3/6.
 */
var co = require('co');
var OSS = require('ali-oss');
var fs = require('fs');

var client = new OSS({
    region: 'oss-cn-shanghai',
    accessKeyId: 'V1FTiRG0ctsWsudK',
    accessKeySecret: 'MKXft0HrlFdW87s1IvxdDi4NgQhzIt'
});

co(function* () {
    client.useBucket('likaiboy');
    var result = yield client.put('pixiv/doodle2.png',fs.createReadStream('./doodle.png') );
    console.log(result);
}).catch(function (err) {
    console.log(err);
});


