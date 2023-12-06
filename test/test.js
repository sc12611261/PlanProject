const assert = require('assert');
const { fibonacci } = require('../src/fibonacci'); 

describe('Fibonacci', function () {
  it('should return 0 for n = 0', function () {
    const result = fibonacci(0);
    assert.strictEqual(result, 0);
  });

  it('should return 1 for n = 1', function () {
    const result = fibonacci(1);
    assert.strictEqual(result, 1);
  });

  it('should return the correct value for n > 1', function () {
    const result = fibonacci(6);
    assert.strictEqual(result, 8);
  });

  
});