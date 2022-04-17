const mongoose = require('mongoose');
const connectionMongoDb = require('./connection');
const timestamp = require('time-stamp');

const articleSchema = new mongoose.Schema({

    "writer": String,
    "title": String,

}, { timestamps: true });

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;