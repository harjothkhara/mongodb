const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('Deleting records', () => {

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
  it('Delete one record from the database', (done) => {
    MarioChar.findOneAndRemove({name:'Mario'}).then(() => {
      MarioChar.findOne({name:'Mario'}).then((result) =>{
        assert(result === null);
        done();
      });
    });
  });
  //next test
});
