// document.addEventListener('scroll', () => {
//         const windowHeigt = window.outerHeight;
//         const scrollValue = window.pageYOffset;
//         let arrowShow = document.querySelector('.scroll');


//         scrollValue > 600 ? arrowShow.classList.add('scroll--show') : arrowShow.classList.remove('scroll--show');
//         arrowShow.addEventListener('click', function (e) {
//             e.preventDefault();
//             window.scrollTo(0, 0);

//         })
//     }
// );



// pojawienie sie napisów intro
const wrapperIntro = $('.l-wrapper--intro');

if (wrapperIntro.hasClass('l-wrapper--showing') == 0) {

    setTimeout(function () {
        wrapperIntro.addClass('l-wrapper--showing');
    }, 1500);
}


$(document).scroll(function () {

    const scrollValue = $(this).scrollTop();
    const windowHeight = $(window).height();

    const featureProject = $('.c-features--inline');
    const featureProjectFromTop = featureProject.offset().top;
    const featureProjectHeight = featureProject.outerHeight();



    if (featureProject.hasClass('c-features--inline--show') == 0) {
        if (scrollValue > featureProjectFromTop + featureProjectHeight - windowHeight) {
            let h = -1;
            const time = setInterval(function () {
                h++;
                // featureProject[h].classList.add('c-features--inline--show');
                featureProject.eq(h).addClass('c-features--inline--show');
                console.log(h);

                if (h >= 2) {
                    clearInterval(time);
                }
            }, 700)
        }
    }



    // pojawienie sie po koleji z kazdej sekcji
    let wrapper = $('.l-wrapper');
    let j = 0;

    for (j; j < (wrapper.length - 1); j++) {
        if (j === 2) {
            continue;
        }
        let wrapperFromTop = wrapper.eq(j).offset().top;
        let wrapperHeight = wrapper.eq(j).outerHeight();

        if (scrollValue > wrapperFromTop + wrapperHeight / 2 - windowHeight) {
            wrapper.eq(j).addClass('l-wrapper--showing');
        }

    }

})