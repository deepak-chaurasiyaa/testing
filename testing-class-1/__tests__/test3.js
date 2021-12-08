const sum = require("../index")

test("addition of n numbers",function(){
    expect(sum(1,0,0,5)).toBe(6);
})

test("addition of n numbers",function(){
    expect(sum(2,4,3,6)).toBe(15);
})