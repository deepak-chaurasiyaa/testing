const validate = require('../index')
test('password should be atleast one number', () => {
    expect(validate("DEEPAKchaurasiya")).toBe("Password must include at least one Number")
})
