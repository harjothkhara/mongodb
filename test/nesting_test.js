const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

//Describe our tests
describe('Nesting records', () => {

    beforeEach((done) => {
      mongoose.connection.collections.authors.drop(() => {
        done();
      })
    });

  //create tests
  it('Creates an author with sub-documents', (done) => {

    var pat = new Author({
      name:'Patrick Rothfuss',
      books:[{title:'Name of the Wind', pages:400}]
    });
    //saving new author to database and function fires only when action is complete
    pat.save().then(() => {
      //find that author(aysnc), .then once you've found it and fire this function and give me the record that you've found within that function.
      Author.findOne({name:'Patrick Rothfuss'}).then((record) => {
        assert(record.books.length === 1);
        done();
      });
    });
  });
  it('Adds a books to an author',(done) => {
    var pat = new Author({
      name:'Patrick Rothfuss',
      books:[{title:'Name of the Wind', pages:400}]
    });

    pat.save().then(() => {
      Author.findOne({name:'Patrick Rothfuss'}).then((record) => {
        // add a book to the books array
        record.books.push({title: "Wise Man's Fear", pages:500});
        record.save().then(() => {
          Author.findOne({name:'Patrick Rothfuss'}).then((result) => {
            assert(result.books.length === 2);
            done();
          })
        })
      });
    });
  });



});
