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
