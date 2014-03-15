/*
 * @author Rukmal Weerawarana
 *
 * @description jQuery and error validation for form entry.
 */

 $(document).ready(function() {
    $('#submitButton').click(function() {
        // checking if passwords match
        if ($('#password').val() != $('#confirmPassword').val()) {
            $('#wrongPassword').css('display', 'block');
        } else {
            $('#wrongPassword').css('display', 'none');
        }

        // checking if emails match
        if ($('#email').val() != $('#emailConfirm').val()) {
            $('#wrongEmail').css('display', 'block');
        } else {
            $('#wrongEmail').css('display', 'none');
        }

        // checking if all fields have been filled
        $('input').each(function() {
            if ($(this).val() == "") {
                $('#someEmpty').css('display', 'block');
            } else {
                $('#someEmpty').css('display', 'block');
            }
        });
    });
 });
