// let btn = $('.scroll');

// $(window).scroll(function () {
//     if ($(window).scrollTop() > 600) {
//         btn.addClass('scroll--show');
//     } else {
//         btn.removeClass('scroll--show');
//     }
// });

// btn.on("click", function (e) {
//     e.preventDefault();
//     $('html, body').animate({
//         scrollTop: 0
//     }, '400');
// });


let btn = $('.c-back-top');
let logo = $('.c-logo');

$(window).scroll(function () {
    if ($(window).scrollTop() > 600) {
        btn.addClass('c-back-top--show');
    } else {
        btn.removeClass('c-back-top--show');
    }
});

btn.on("click", function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '400');
});

logo.on("click", function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '400');
});