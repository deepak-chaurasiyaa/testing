const validate = require('../index')
test('password should be atleast one special charecter', () => {
    expect(validate("deepakC123")).toBe("Password must include at least one Special Charecter")
})
