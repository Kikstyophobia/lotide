const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// const findKeyByValue = function(object, key) {
//   for (let i = 0; i<Object.keys(object).length; i++){
//     console.log(Object.keys(object))
//     if (key === Object.keys)
//   }
// }

const findKeyByValue = function(object, key) {
  for (let genre of Object.keys(object)) {
    if (object[genre] === key) {
      return genre;
    }
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);