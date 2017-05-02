//该模块只定义了一个方法coalesce，用于取第一个不为空的对象
var util = {
    coalesce:function (obj1,obj2){
        var result = obj1 ? obj1 :obj2;
        if(!result){
            result = obj2? obj2:0;
        }
        return result;
    }
}

module.exports = util;