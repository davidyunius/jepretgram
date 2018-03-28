const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
  url: String,
  name: String,
  caption: String
})

module.exports = mongoose.model('Photo', photoSchema)