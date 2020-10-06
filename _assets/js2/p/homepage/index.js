import '../../../js/jquery.background-video'
import '../../../js/glider.min'
let fitvid = require( '../../../js/plugins/jquery.fitvids');

$(document).ready(function(){

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
});