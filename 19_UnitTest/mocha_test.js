const assert = require('assert');

function sum(a, b) {
  return a + b;
}

describe('sum', () => {
    it('adds 1 + 2 to equal 3', () => {
      assert(sum(1, 2) === 3);
    });
  });
  