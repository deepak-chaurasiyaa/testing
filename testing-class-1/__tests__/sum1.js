const sum = require("../index")

test("addition of n numbers",function(){
    expect(sum(1,-3,4,5)).toBe(7);
})

test("addition of n numbers",function(){
    expect(sum(12,4,3,6)).toBe(25);
})