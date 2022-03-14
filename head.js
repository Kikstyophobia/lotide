const assertEqual = require('./assertEqual')

const head = function(item) {
  return item[0];
}
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
//ssertEqual(words.length, 3); // original array should still have 3 elements!

module.exports = head;