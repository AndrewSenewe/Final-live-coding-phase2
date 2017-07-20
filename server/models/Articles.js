'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: Array,
    required: true
  }
}, {
  timestamps: true
});

let Article = mongoose.model('Article', articleSchema);

module.exports = Article;