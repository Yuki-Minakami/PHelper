var config = {
    minViewCount:10000,//根据点击量来筛选的最小值
    processNum:5,//并发的进程数量
    rangeForSingleProcess:50000,//每个进程负责爬取的id数量
    timeForPerRequest:5,//单次请求的时间间隔
    perRequest:5//每个时间间隔发出的请求数
}

module.exports = config;

