const mongoose = require('mongoose');
const connectionMongoDb = require('./connection');
const timestamp = require('time-stamp');

const usertSchema = new mongoose.Schema({

    "firstName": String,
    "lastName": String,
    "userName": String,
    "password": Number,

}, { timestamps: true });

const User = mongoose.model('User', usertSchema);


module.exports = User;