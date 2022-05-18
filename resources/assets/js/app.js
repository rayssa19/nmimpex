require('./bootstrap');

// Project imports
// EX:
// import { exemplo } from ./main/exemplo


$(document).ready(function() {
    $('.navbar-nav li ').click(function() {
        $('.navbar-nav li').removeClass('active');
        $(this).addClass('active');
    });



    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if (scroll > 35) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

