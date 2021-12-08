const validate = require('../index')
test('password should be atleast one Upper case charecter', () => {
    expect(validate("deepak")).toBe("Password must include at least one Upper Case charecter")
})
