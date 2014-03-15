/*
 * @author Rukmal Weerawarana
 *
 * @description jQuery and error validation for form entry.
 */

 $(document).ready(function() {
    $('#submitButton').click(function() {
        var done = true;
        // checking if passwords match
        if ($('#password').val() != $('#confirmPassword').val()) {
            $('#wrongPassword').css('display', 'block');
            done = false;
        } else {
            $('#wrongPassword').css('display', 'none');
            done = true;
        }

        // checking if emails match
        if ($('#email').val() != $('#emailConfirm').val()) {
            $('#wrongEmail').css('display', 'block');
            done = false;
        } else {
            $('#wrongEmail').css('display', 'none');
            done = true;
        }

        // checking if all fields have been filled
        $('input').each(function() {
            if ($(this).val() === '') {
                $('#someEmpty').css('display', 'block');
                done = false;
            } else {
                $('#someEmpty').css('display', 'none');
                done = true;
            }
        });

        // if (done) {
        //     exports.upload = function(req, res) {
        //         var user = new User({
        //             firstName: req.body.firstName,
        //             lastName: req.body.lastName,
        //             email: req.body.email,
        //             userName: req.body.username,
        //             password: req.body.password
        //         });
        //         test.save(function(err) {
        //             if (err) {
        //                 console.log('failed');
        //             } else {
        //                 res.redirect('/')
        //             }
        //         })
        //     };
        //
        // }

    });
 });
