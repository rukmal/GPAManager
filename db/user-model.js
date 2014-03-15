/*
 * @author Rukmal Weerawarana
 *
 * @description Mongoose configuration for application.
 */

'use strict'

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

var userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    userName: {type: String, required: true, {unique: true}},
    password: {type: String, require: true}
});

userSchema.pre('save', {
    var user = this;
    // only hash the password if it has been changed.
    if (!user.isModified('password')) {
        return next();
    };

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) {
            return next(err);
        }

        // hash the password with the salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) {
                return next(err);
            }
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePasswords = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) {
            return cbb(err);
        };
        cbb(null, isMatch);
    });
};

module.exports = mongoose.model(User, userSchema);
