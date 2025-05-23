$(function () {
    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        autoplay: {
            delay: 2500,
            speed: 1000,

        },


    });
    $('.main_visual .prev').on('click', function () {
        main_visual_slide.slidePrev();
    });

    $('.main_visual .next').on('click', function () {
        main_visual_slide.slideNext();
    });

    const MMS = new Swiper('.main_best_slide', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: {
            delay: 3000,
            speed: 5000,
        },

        pagination: {
            el: '.main_best .page',
            clickable: true,
        },

    });

    const main_zero_slide = new Swiper('.main_zero_slide', {
        loop: true,
        slidesPerView: 2.5,
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
            speed: 5000,
        },
    });


});


$(function () {
    $('.main_delivery .tab_menu li button').on('click', function () {
        let idx = $(this).parent().index(); // 클릭한 것의 번호를 가져와서 저장함
        console.log(idx);

        $('.main_delivery .tab_menu li button').removeClass('on');
        $(this).addClass('on');

        $('.main_delivery .tab_content .con').removeClass('on');
        $('.main_delivery .tab_content .con').eq(idx).addClass('on');
    });


});


$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 })
    });

    $(window).on('scroll', function () {
        //스크롤 된 양을 구함.
        let sct = $(window).scrollTop();
        console.log(sct)

        if (sct > 400) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });

})

