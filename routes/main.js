/*
 * @author Rukmal Weerawarana
 *
 * @description Main routing file for the GPA Manager application.
 */


var pageTitle = 'GPA Manager : ';
var User = require('./../models/user');

exports.index = function(req, res) {
    res.render('index', {
        title : pageTitle + 'Home'
    })
}

exports.signup = function(req, res) {
    res.render('signup', {
        title: pageTitle + 'Sign up'
    })
}

exports.signup_confirm = function(req, res) {
    res.render('signup_pages/signup_confirm', {
        title: pageTitle + 'Welcome!'
    })
}


exports.new_user = function(req, res) {
    var user = new User({
        firstName: req.body.user_first,
        lastName: req.body.user_last,
        email: req.body.user_email,
        userName: req.body.user_uname,
        password: req.body.user_password
    });

    user.save(function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('New user added: ' + user.userName);
            res.redirect('/signup_confirm');
        }
    });
}
