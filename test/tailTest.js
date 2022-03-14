const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {

  it("returns an array of the words ['Lighthouse', 'Labs']", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"])
  });

});