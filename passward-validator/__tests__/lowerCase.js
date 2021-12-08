const validate = require('../index')
test('password should be atleast one lower case charecter', () => {
    expect(validate("DEEPAK")).toBe("Password must include at least one Lower Case charecter")
    expect(validate("DEEPAKCHAURASIYA")).toBe("Password must include at least one Lower Case charecter")
})
test('password should be atleast one lower case charecter', () => {
    expect(validate("DEEPAK")).toBe("Password must include at least one Lower Case charecter")
    expect(validate("DEEPAKCHAURASIYA")).toBe("Password must include at least one Lower Case charecter")
})
