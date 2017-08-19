/**
 * Created by likai on 2017/5/20.
 */

var redis = require("redis");
var bluebird = require("bluebird");
var EventEmitter = require("events");
var config = require("../config.js");

var client  = redis.createClient('6379', '127.0.0.1');
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

client.on("error", function(error) {
    console.log(error);
});

var StartID = config.startID;

client.on("ready",async function(){
    var currentID = await client.lpopAsync("mqTest");

    if(currentID){
        StartID = currentID;
    }
    var length = await getListLength();
    if(length < 10000) {
        producer.emit("begin");
    }
})

class Producer extends EventEmitter{
     constructor(){
        super();
        this.status ="ready";
        //ID即为生产者生产的资源
        this.id = StartID;
    }
}
var producer = new Producer();

producer.on("pause",function(){
    if(this.status === "begin"){
        console.log("Producer will pause");
        this.status = "pause";
    }

});

producer.on("resume",function() {
    if(this.status === "pause"){
        console.log("producer ready to resume");
        this.emit("begin");
    }
});

producer.on("begin",async function(){
    this.status = "begin";

    while(true){
        //如果当前状态变为pause，停止生产
        if(this.status === "pause"){
            break;
        }
        var msg = this.id;
        //写入redis
        await client.lpushAsync("mqTest",msg);
        ++this.id;
    }
});

async function getListLength(){
    //获取缓冲区大小
   var length  = await client.llenAsync("mqTest");
   return length;
   //console.log("Current Length is",length);
   //当缓冲区的数量到达10000时，暂停生产
   // if(length > 10000){
   //     producer.emit("pause");
   // }else if(producer.status == "pause"){
   //     producer.emit("resume");
   // }
}


setInterval(async function(){
    let length = await getListLength();

    if(length > 10000 && producer.status == "begin"){
        console.log("producer will pause");
        producer.emit("pause");
    }

    if(length<10000 && producer.status === "pause"){
        producer.emit("resume");
    }

},10000);//每隔10s检查一次

