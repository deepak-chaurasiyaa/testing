let taxCalculator = require('..')

test('checking for belew 250000', () => {
    expect(taxCalculator(240000)).toBe("no tax")
})
