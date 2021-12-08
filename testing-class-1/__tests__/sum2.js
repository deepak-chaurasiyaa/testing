const sum = require("../index")

test("Addition of two positive umbers",function(){
    expect(sum(2,3,1,4)).toBe(10);
})

test("substraction of two  numbers",function(){
    expect(sum(-5,-5,5,5)).toBe(0);
})