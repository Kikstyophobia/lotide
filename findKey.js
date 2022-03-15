function findKey(object, callbackFunc) {
  for (let restaurant in object) {
    let starsObject = object[restaurant]
    if (callbackFunc(starsObject)) {
      return restaurant;
    }
  }
};

const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

module.exports = findKey;