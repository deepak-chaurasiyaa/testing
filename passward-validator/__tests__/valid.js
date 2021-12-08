const validate = require('..')

test('should valid', () => {
    expect(validate("Deepak.123")).toBe("Valid Password")
})
