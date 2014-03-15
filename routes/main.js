/*
 * @author Rukmal Weerawarana
 *
 * @description Main routing file for the GPA Manager application.
 */

'use strict'

var pageTitle = 'GPA Manager : '

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index', {
            title : pageTitle + 'Home'
        });
    });

    app.get('/about', function(req, res) {
        res.render('about', {
            title : pageTitle + 'About'
        });
    });

    app.get('/signup', function(req, res) {
        res.render('signup', {
            title : pageTitle + 'Sign Up'
        });
    });
}
