'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var PollSchema = new mongoose.Schema({
  question: String,
  options: Array,
  votes: [String],
  picture: String,
  date: Date,
  author: String
});

export default mongoose.model('Poll', PollSchema);
