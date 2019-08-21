const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('Updating records', () => {

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
  it('Update one record in the database', (done) => {
    MarioChar.findOneAndUpdate({name:'Mario'},{name:'Luigi'}).then(() => {
      MarioChar.findOne({_id:char._id}).then((result) => {
        assert(result.name === 'Luigi');
        done();
      });
    });
  });
  //next test
});
