const validate = require('../index')
test('length should be atleast 6', () => {
    expect(validate("raj")).toBe("Password length must be greater than six charecters")
})
