
var $body,
    windowHeight,
    windowWidth,
    degree = 0.0174532925,
    mediaPoint1 = 1024,
    mediaPoint2 = 768,
    mediaPoint3 = 480,
    mediaPoint4 = 320;

$(document).ready(function ($) {
    $body = $('body');

});

$(window).on('load', function () {
    updateSizes();
    loadFunc();
});

$(window).on('resize', function () {
    resizeFunc();
});

$(window).on('scroll', function () {
    scrollFunc();
});

function loadFunc() {

    //ANIMATE=====================================================
    //============================================================//
    var Wow = new WOW({
        offset: 150,
        mobile: false
    }).init();

    //SCROLL =====================================================
    //============================================================/
    $('.jsScroll').mPageScroll2id({
        offset: 0,
        scrollSpeed: 950
    });

    //LIGHT GALLERY===============================================
    //============================================================/
    $('.jsGallery-item').lightGallery({
        selector: '.gallery-wrapp',
        thumbnail: true,
        animateThumb: true,
        enableTouch: true,
        enableDrag: false,
        thumbWidth: 100,
        thumbContHeight: 100,
        currentPagerPosition: 'middle',
    });
}

function resizeFunc() {
    updateSizes();
}

function scrollFunc() {

    //FIX NAVIGATION==============================================
    //============================================================//
    var nav = ('.fixed-nav'),
        firstScreenHeight = $('.first-screen').innerHeight() - 65;

    if ($(window).scrollTop() > firstScreenHeight) {
        $(nav).addClass('-fixed');
    };
    if ($(window).scrollTop() < firstScreenHeight) {
        $(nav).removeClass('-fixed');
    };
}

function updateSizes() {
    windowWidth  = window.innerWidth;
    windowHeight = window.innerHeight;

    //FIX HEIGHT FORM BLOCKS======================================
    //============================================================//
    var form01Height  = $('#review-one .wrapp-form').innerHeight() + 'px',
        form02Height  = $('#pay .wrapp-form').innerHeight() + 'px',
        form03Height  = $('#review-two .wrapp-form').innerHeight() + 'px',
        form01Content = $('#review-one .wrapp-align'),
        form02Content = $('#pay .wrapp-align'),
        form03Content = $('#review-two .wrapp-align');

    $(form01Content).css('height', form01Height);
    $(form02Content).css('height', form02Height);
    $(form03Content).css('height', form03Height);

    
}

if ('objectFit' in document.documentElement.style === false) {
    document.addEventListener('DOMContentLoaded', function () {
        Array.prototype.forEach.call(document.querySelectorAll('img[data-object-fit]'), function (image) {
            (image.runtimeStyle || image.style).background = 'url("' + image.src + '") no-repeat 50%/' + (image.currentStyle ? image.currentStyle['object-fit'] : image.getAttribute('data-object-fit'));

            image.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'' + image.width + '\' height=\'' + image.height + '\'%3E%3C/svg%3E';
        });
    });
}