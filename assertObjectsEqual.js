const eqArrays = require('./eqArrays')
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let isEqual = eqObjects(actual, expected)
  if (isEqual) {
    console.log(`✅ Assertion Passed: ${inspect(expected)} === ${inspect(actual)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(expected)} !== ${inspect(actual)}`);
  }
};

// const first = { a: "1", b: "2", c:[1,2,3]};
// const second = { b: "2", a: "1", c:[1,2,3]};
// const third = { a: "1", b: "2", c: "3" };
// const fourth = { e: "1", b: "2", d: "3" };
// assertObjectsEqual(first, second)

module.exports = assertObjectsEqual;