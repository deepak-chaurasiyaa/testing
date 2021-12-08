const sum = require("../index")

test("addition of n numbers",function(){
    expect(sum(-19,-3,4,5)).toBe(-13);
})

test("addition of n numbers",function(){
    expect(sum(0,0,0,0)).toBe(0);
})