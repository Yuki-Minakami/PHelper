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