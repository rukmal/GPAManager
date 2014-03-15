/*
 * @author Rukmal Weerawarana
 *
 * @description Mongoose configuration for application.
 */

'use strict'

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String
});

mongoose.model('user', userSchema);

mongoose.connect('mongodb://localhost/grammarDB');
