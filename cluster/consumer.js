/**
 * Created by likai on 2017/5/21.
 */
var redis = require("redis");
var bluebird = require("bluebird");
var EventEmitter = require("events");
var request = require("../getURL/worker");
var persist = require("../getURL/persist.js");
var client  = redis.createClient('6379', '127.0.0.1');
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

client.on("error", function(error) {
    console.log(error);
});
client.on("ready",function(){
    console.log("ready");
    consumer.emit("begin");
})

class Consumer extends EventEmitter{
    constructor(){
        super();
        this.status = "ready";
    }
}

var consumer = new Consumer();

consumer.on("pause",function(){
    console.log("Consumer will pause");
    this.status = "pause";
});

consumer.on("resume",() => {
    if(this.status === "pause"){
        this.status = "begin";
        this.emit("begin");
    }
});

consumer.on('begin',async function(){
    this.status ="begin";
    while(true)
    {
        var value = await client.rpopAsync("mqTest");
        //调用封装好的request方法
        let result = await request(value);

        //提供的默认持久化方法
        if(result){
            console.log(result);
            persist(JSON.stringify(result));
        }

        if(this.status === "pause" ){
            break;
        }
    }
})

async function getListLength(){
    console.log("Cousumer status ",consumer.status);
    //获取缓冲区大小
    var length  = await client.llenAsync("mqTest");

    if(length == 0 && consumer.status ==="begin"){
        console.log("consumer will pause")
        consumer.emit("pause");
    }else if(consumer.status ==="pause" && length >1000){
        //设置当缓冲区大于1000时才启动消费者，避免在临界值附近反复切换状态
        consumer.emit("resume");
    }

}


setInterval(getListLength,30000);//每隔30s检查一次缓冲区