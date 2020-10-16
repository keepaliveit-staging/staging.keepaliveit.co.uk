import '../../../js/jquery.background-video'
import '../../../js/rotaterator'
import '../../../js/glider.min'
import '../../../js/slick.min'

let fitvid = require('../../../js/plugins/jquery.fitvids');

$(document).ready(function () {

    $('.rotateText').rotaterator({
        fadeSpeed: 2000,
        pauseSpeed: 1000
    });

    // FitVids init
    $("#main").fitVids();

    if ($('.ux-vertical-tabs').length > 0) {
        $('.ux-vertical-tabs .tabs button').on("click", function () {
            var temp_tab = $(this).data('tab');
            var temp_tab_js = this.getAttribute('data-tab');
            var temp_content = $('.ux-vertical-tabs .maincontent .tabcontent[data-tab="' + temp_tab + '"]');
            var temp_content_js = document.querySelector('.ux-vertical-tabs .maincontent .tabcontent[data-tab="' + temp_tab_js + '"]');
            var temp_content_active_js = document.querySelector('.ux-vertical-tabs .maincontent .tabcontent.active');

            $('.ux-vertical-tabs .tabs button').removeClass('active');
            $('.ux-vertical-tabs .tabs button[data-tab="' + temp_tab + '"]').addClass('active');

            $('.ux-vertical-tabs .maincontent .tabcontent').removeClass('active');
            temp_content.addClass('active');
        });
    }


    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        dots: '.dots',
        draggable: true,
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
    });

    $(".regular").slick({
        lazyLoad: 'ondemand',
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


});