const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  } else {
  for (let i = 0; i < arrOne.length; i++) {
      if (arrOne[i] !== arrTwo[i]) {
        return false;
      }
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let keys in object1) {
    if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
      if (!eqArrays(object1[keys], object2[keys])) {
        return false;
      }
    }
    else {
      if (object1[keys] !== object2[keys]) {
      return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let isEqual = eqObjects(actual, expected)
  if (isEqual) {
    console.log(`✅ Assertion Passed: ${inspect(expected)} === ${inspect(actual)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(expected)} !== ${inspect(actual)}`);
  }
};

const first = { a: "1", b: "2", c:[1,2,3]};
const second = { b: "2", a: "1", c:[1,2,3]};
const third = { a: "1", b: "2", c: "3" };
const fourth = { e: "1", b: "2", d: "3" };
assertObjectsEqual(first, second)