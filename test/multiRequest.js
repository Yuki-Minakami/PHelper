/**
 * Created by likai on 2017/5/25.
 */
var RequestId = require("../getURL/worker");

test.cb("multi request test",async function(t) {
    for (let i = 0; i < 10; i++) {
        await RequestId(i);
    }

});
