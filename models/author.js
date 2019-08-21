const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creating Schema
const BookSchema = new Schema({
  title: String,
  pages: Number
});

const AuthorSchema = new Schema({
  name: String,
  age: Number,
  books:[BookSchema]
});

//Creating Model - author collection based on Author Schema
const Author = mongoose.model('author',AuthorSchema)

module.exports = Author; //exporting author model
