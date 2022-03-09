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


const without = function(source, itemsToRemove) {
  let emptyArray = []
  let include = true;
  for (let i = 0; i<source.length; i++) {
    for (let k = 0; k < itemsToRemove.length; k++) {
      if (source[i] === itemsToRemove[k]) {
      include = false;
      }
    }
    if (include) {
      emptyArray.push(source[i]);
    }
    include = true;
  }
  return emptyArray;
};


console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

