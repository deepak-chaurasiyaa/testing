const sum = require('../index');

test('minute test', () => {
  expect(sum(60000)).toBe("1 minutes");
  expect(sum(180000)).toBe("3 minutes");
  expect(sum(200000)).toBe("3 minutes 20 seconds");
});