const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    // even arrays
    if (array.length > 2 && array.length % 2 === 0) {
      newArray.push(array.length/2);
      newArray.push(array.length/2 + 1);
      return newArray;
    // odd arrays
    } else if (array.length > 2 && array.length % 2 !== 0) {
      newArray.push(Math.round(array.length/2));
      return newArray;
    }
    // non-applicable arrays
    else {
      return [];
    }
  }
};

// assertArraysEqual(middle([1]), []) // => []
// assertArraysEqual(middle([1, 2]), []) // => []
// assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
// assertArraysEqual(middle([1, 2, 3, 4]), [2,3]) // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]) // => [3, 4]

module.exports = middle;