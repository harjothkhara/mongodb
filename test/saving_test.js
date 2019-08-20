const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('Saving records', () => {

  // create tests
  it('Saves a record to the database', (done) => {

    const char = new MarioChar({
      name: 'Mario'
    });

    char.save().then(() => { //async request with a promise
      assert(char.isNew === false); // returns true if we haven't yet saved it to the db yet.returns false when its been saved to the db and is no longer new(which is what we want);
      done(); // telling mocha that we're done and move onto the next test.
    });

  });
  //next test
});
