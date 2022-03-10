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


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
      results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("calvin chung").c, [0, 7]);

