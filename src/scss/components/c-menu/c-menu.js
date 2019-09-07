// linkowanie menu
$('.c-menu__link').on('click', function () {
    const goToSection = $(this).attr('href');

    console.log(goToSection);

    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    }, '3000');
})