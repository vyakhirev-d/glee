$(function () {
    $('.user-nav__item-search').on('click', function () {
        $('.user-nav__item-input').toggleClass('user-nav__item-input--active');

    });
    $('.slider-top__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000

    })

});