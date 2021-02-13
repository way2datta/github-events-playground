const sum = require('./index');

test('expense-tracker ui: adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});