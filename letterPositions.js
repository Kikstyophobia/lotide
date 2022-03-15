const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual')

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

// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("calvin chung").c, [0, 7]);

module.exports = letterPositions;