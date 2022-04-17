const mongoose = require('mongoose');
const connectionMongoDb = require('./connection');
const timestamp = require('time-stamp');

const commentSchema = new mongoose.Schema({

    "writer": String,
    "text": String,

}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;