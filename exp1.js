/**
 * Created by likai on 2017/5/19.
 */
var http = require("http");
var foo = {
    getRequest:function(url,callback){
        http.get(url, callback);
    }
}
module.exports = foo;

//foo.getRequest("http://baidu.com",foo.callback)