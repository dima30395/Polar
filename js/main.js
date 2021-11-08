$(function() {
   
    $('.products__slider-reviews').slick({
        // slidesToShow: 1,
        // slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.products__slider-ava',
        adaptiveHeight: true
    });
    

    $('.products__slider-ava').slick({
        centerMode: true,
        centerPadding: '30px',
        variableWidth: true,
        infinite: false,

        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.products__slider-reviews',
        // focusOnSelect: true,

        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img class="slick__prev-img" src="images/slider/arrow.png" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img class="slick__next-img" src="images/slider/arrow.png" alt="arrow"></button>',
    });


    $('.header__burger').on('click', function() {
        $('.header__menu, .header__burger').toggleClass('active')
    })








});