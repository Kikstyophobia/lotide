const eqArrays = require('./eqArrays')


const assertArraysEqual = function(firstArray, secondArray) {
  let isEqual = eqArrays(firstArray, secondArray) 
  if (isEqual) {
    console.log("✅ Assertion Passed!");
  } else {
    console.log("❌ Assertion Failed!");
  }
};

assertArraysEqual([1,2,3], [1,2,3]);



