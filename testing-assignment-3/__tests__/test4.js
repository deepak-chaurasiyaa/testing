let taxCalculator = require('..')

test('checking for Amount earned abobe 10,00,000', () => {
    expect(taxCalculator(1200000)).toBe(360000)
})
