$(function () {
    $('.slider__item').slick({
        arrows: true,
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    });
});
$(document).on('click','.spoiler-trigger',function(e){e.preventDefault();$(this).toggleClass('active');$(this).parent().find('.spoiler-block').first().slideToggle(300);})