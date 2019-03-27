$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 1220,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false
            }
        },{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});

$(window).scroll(function() {
    $('header').toggleClass('scroll', $(this).scrollTop() > 10);
});

$("h1").fadeIn(1000);