const add = require('./index');

test('two plus two is four', () => {
    expect(add(2, 2)).toBe(4);
  });