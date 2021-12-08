let taxCalculator = require('..')

test('checking for Amount earned between 2,50,000 and 5,00,000', () => {
    expect(taxCalculator(300000)).toBe(30000)
})
