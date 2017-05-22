/**
 * Created by likai on 2017/5/18.
 */
import test from 'ava';

test.cb('#readFile()', t => {
    // 此方法是异步的，不知道为何这里需要写绝对路径，相对路径会出错
    require("fs").readFile(__dirname+"/1.txt",function(err,data){
        t.true(data.length>10)
        t.end();
    });
});

