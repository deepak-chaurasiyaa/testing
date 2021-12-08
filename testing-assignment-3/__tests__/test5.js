let taxCalculator = require('..')

test('checking for Amount earned between 5,00,000 and 10,00,000', () => {
    expect(taxCalculator(700000)).toBe(140000)
})
