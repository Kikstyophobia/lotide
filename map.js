const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  let newArray = [];
  for (let item of array) {
  console.log('array: ', item);
  console.log('callback: ', callback(item));
  console.log("-----")
  }
  return newArray;
};

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

const assertArraysEqual = function(firstArray, secondArray) {
  let isEqual = eqArrays(firstArray, secondArray) 
  if (isEqual) {
    console.log("✅ Assertion Passed!");
  } else {
    console.log("❌ Assertion Failed!");
  }
};

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, map(words, word => word[0]));
assertArraysEqual(results1, map(words, word => word[1]));
assertArraysEqual(results1, map(words, word => word[2]));
// in the return of the last case, callback for the word "to"
// returns 'undefined' because it is calling index[2] (third element), 
// which does not exist in the word "to" as it has only 2 characters (elements).
// however, it still passes the test.
