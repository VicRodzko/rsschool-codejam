const assert = require('assert');

const sumOfOther = require('../sumOfOther');
const make = require('../make');
const recursion = require('../recursion');

describe('check function sumOfOther', () => {
  it('1', () => {
    const arr = sumOfOther([7, 16, 21, 57, 12]);
    assert.equal(JSON.stringify(arr), JSON.stringify([106, 97, 92, 56, 101]));
  });

  it('2', () => {
    const arr = sumOfOther([1, 2, 3, 4]);
    assert.equal(JSON.stringify(arr), JSON.stringify([9, 8, 7, 6]));
  });

  it('3', () => {
    const arr = sumOfOther([2, 17, 1, 16]);
    assert.equal(JSON.stringify(arr), JSON.stringify([34, 19, 35, 20]));
  });

  it('4', () => {
    const arr = sumOfOther([1]);
    assert.equal(JSON.stringify(arr), JSON.stringify([0]));
  });

  it('5', () => {
    const arr = sumOfOther([0, 2, 1]);
    assert.equal(JSON.stringify(arr), JSON.stringify([3, 1, 2]));
  });

  it('6', () => {
    const arr = sumOfOther([10, 3, 5, 1, 15]);
    assert.equal(JSON.stringify(arr), JSON.stringify([24, 31, 29, 33, 19]));
  });
});

describe('check function make', () => {
  function sum(a, b) {
    return a + b;
  }

  it('1', () => {
    const result = make(15)(34, 21, 666)(41)(sum);
    assert.equal(JSON.stringify(result), 777);
  });

  it('2', () => {
    const result = make(10)(21, 7)(41, 16)(sum);
    assert.equal(JSON.stringify(result), 95);
  });

  it('3', () => {
    const result = make(1, 21, 62)(2, 7, 25)(4, 13, 77)(sum);
    assert.equal(JSON.stringify(result), 212);
  });

  it('4', () => {
    const result = make(1)(2)(4)(4)(7)(2)(9)(3)(99)(111)(222)(sum);
    assert.equal(JSON.stringify(result), 464);
  });

  it('5', () => {
    const result = make(1, 3, 6)(2, 2, 4)(4, 6, 7)(4, 1, 2)(7)(2)(9)(3)(99)(sum);
    assert.equal(JSON.stringify(result), 162);
  });

  it('6', () => {
    const result = make(1)(2)(4, 6, 7)(4)(7)(2)(3)(sum);
    assert.equal(JSON.stringify(result), 36);
  });
});

describe('check function recursion', () => {
  it('1', () => {
    const tree = {
      value: 100,
      left: { value: 90, left: { value: 70 }, right: { value: 99 } },
      right: { value: 120, left: { value: 110 }, right: { value: 130 } },
    };
    const array = recursion(tree);
    assert.equal(JSON.stringify(array), JSON.stringify([[100], [90, 120], [70, 99, 110, 130]]));
  });

  it('2', () => {
    const tree = {
      value: 99,
      left: { value: 89, left: { value: 69 }, right: { value: 98 } },
      right: { value: 119, left: { value: 109 }, right: { value: 129 } },
    };
    const array = recursion(tree);
    assert.equal(JSON.stringify(array), JSON.stringify([[99], [89, 119], [69, 98, 109, 129]]));
  });

  it('3', () => {
    const tree = {
      value: 101,
      left: { value: 91, left: { value: 71 }, right: { value: 100 } },
      right: { value: 121, left: { value: 111 }, right: { value: 131 } },
    };
    const array = recursion(tree);
    assert.equal(JSON.stringify(array), JSON.stringify([[101], [91, 121], [71, 100, 111, 131]]));
  });

  it('4', () => {
    const tree = {
      value: 150,
      left: { value: 140, left: { value: 120 }, right: { value: 149 } },
      right: { value: 170, left: { value: 160 }, right: { value: 180 } },
    };
    const array = recursion(tree);
    assert.equal(JSON.stringify(array), JSON.stringify([[150], [140, 170], [120, 149, 160, 180]]));
  });

  it('5', () => {
    const tree = {
      value: 200,
      left: { value: 190, left: { value: 170 }, right: { value: 199 } },
      right: { value: 220, left: { value: 210 }, right: { value: 230 } },
    };
    const array = recursion(tree);
    assert.equal(JSON.stringify(array), JSON.stringify([[200], [190, 220], [170, 199, 210, 230]]));
  });

  it('6', () => {
    const tree = {
      value: 2000,
      left: { value: 1900, left: { value: 1700 }, right: { value: 1990 } },
      right: { value: 2200, left: { value: 2100 }, right: { value: 2300 } },
    };
    const array = recursion(tree);
    assert.equal(
      JSON.stringify(array),
      JSON.stringify([[2000], [1900, 2200], [1700, 1990, 2100, 2300]]),
    );
  });
});
