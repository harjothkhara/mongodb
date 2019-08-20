const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('Finding records', () => {

let char;

  beforeEach((done) =>{
    //creating a character
    char = new MarioChar({ //unique key every time saved to the db - or test is run.
      name: 'Mario'
    });
    //saving it to the database
    char.save().then(() => { //async request with a promise
      done(); // telling mocha that we're done and move onto the next test.
    });
  })

  // create tests
  it('Find one record from the database', (done) => {

    MarioChar.findOne({name:'Mario'}).then((result) => {
      assert(result.name === 'Mario');
      done();
    });
  });

  it('Find one record by ID from the database', (done) => {

    MarioChar.findOne({_id: char._id}).then((result) => {
      assert(result._id.toString() === char._id.toString()); // want to make sure what we're searching for matches the id from the result
      done();
    });
  });
  //next test
});
