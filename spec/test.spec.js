var foo = require("../exp1.js");
var fetchedBar;

describe("A spy, when configured to fake a series of return values", function() {


    it("tracks that the spy was called", function(done) {
        foo.getRequest("http://localhost:3000",function(data){
            expect(data.statusCode).toBe(302);
            done();
        });
    });

});

describe("CallFake",function(){
    beforeEach(function(){
        spyOn(foo,"getRequest").and.callFake(function(){
            return "FakeValue";
        })
        fetchedBar = foo.getRequest("http://localhost:3000");
    });

    it("test callFake",function(){
       expect(fetchedBar).toBe("FakeValue");
    })

})
