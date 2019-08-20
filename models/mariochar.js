const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and Model
const MarioCharSchema = new Schema({
  name: String,
  weight: Number
});

//model based on the schema above
const MarioChar = mongoose.model('mariochar',MarioCharSchema) //collection or model name which is based on the schema above

module.exports = MarioChar;
