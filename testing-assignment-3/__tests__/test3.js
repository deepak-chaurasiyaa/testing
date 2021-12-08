let taxCalculator = require('..')

test('checking for Amount earned between 5,00,000 and 10,00,000', () => {
    expect(taxCalculator(600000)).toBe(120000)
})
