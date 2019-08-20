const mongoose = require('mongoose');

//ES6 Promises
mongoose.Promise = global.Promise;

// Connect to the db before tests run
before((done) => {
  //Connect to mongodb
  mongoose.connect('mongodb://localhost:27017/testaroo',{ useNewUrlParser: true }); // async request

  mongoose.connection.once('open',function(){
    console.log('Connection has been made, now make fireworks...');
    done();
  }).on('error', function(error){
    console.log('Connection error:', error)
  });
});

//Drop(delete)the characters collection before each test
beforeEach((done) => {
  //drop the collection
  mongoose.connection.collections.mariochars.drop(() => {
    done();
  }); //references all the collections we have in our db - right now just mariochars - remember mongo pluralizes our model
});
