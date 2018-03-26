'use strict';

const test = require('tape');
const final = require('./final.js');

let strings = [
  "abc",
  "ijk",
  "xyz"
];

class Test {
  constructor(actual, expected) {
    this.actual = actual;
    this.expected = expected;
  }
}

test('return empty list', function (t) {
  const emptyList = new Test(final.reOrder([]) , ['','',''])

  t.equal(emptyList.actual, emptyList.expected);
  t.end();
});

/* test('return sum of array', function (t) {
  const oneElementList = new Test(sum.sumArray([5]), 5);

  t.equal(oneElementList.actual, oneElementList.expected);
  t.end();
});
 */