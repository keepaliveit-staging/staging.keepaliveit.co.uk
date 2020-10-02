window.$ = window.jQuery = require('jquery');

import '../js/plugins/droopmenu'
import '../js/plugins/jquery.lazy.min'
import '../js/pushydrawer'
let AOS = require('../js/plugins/aos');
let SmoothScroll = require('../js/plugins/smooth-scroll');


$(document).ready(function () {
    $("#mobile-menu").mobileMenu();

    $("#email-link").attr("href", atob("bWFpbHRvOnRlYW1Aa2VlcGFsaXZlaXQuY28udWs="));
    $("#phone-link").attr("href", atob("dGVsOjAyMDc1NTA5MzIx"));

    AOS.init();

    $('.droopmenu-navbar').droopmenu({
        dmArrow: false,
        dmAnimDelay: 0,
        dmShowDelay: 0,
        dmHideDelay: 0,
        dmAnimation: false
    });
    //$("div.droopmenu-nav > div > div > ul > li:nth-child(1)").addClass("dmopener");

    // Add anchors for headings
    $('.page__content').find('h1, h2, h3, h4, h5, h6').each(function () {
        var id = $(this).attr('id');
        if (id) {
            var anchor = document.createElement("a");
            anchor.className = 'header-link';
            anchor.href = '#' + id;
            anchor.innerHTML = '<span class=\"sr-only\">Permalink</span><i class=\"fa fa-link\"></i>';
            anchor.title = "Permalink";
            $(this).append(anchor);
        }
    });

    // Setup menu hover
    function updateHelpText(elem) {
        let $ht = $("#helptext");

        if ($ht.css('display') === 'none') {
            $ht.show();
        }

        $ht.children(".text-content").text(elem.data('helptext'));
    }

    $('.droopmenu-helptext').hover(
        function () {
            $(this).parent().parent().children('a').addClass('active');
            updateHelpText($(this));
        },
        function () {
            $(this).parent().parent().children('a').removeClass('active');
        }
    );

    $("img.lazy").Lazy({
        effect: "fadeIn",
        defaultImage: "data:image/svg+xml;base64,PCEtLSBCeSBTYW0gSGVyYmVydCAoQHNoZXJiKSwgZm9yIGV2ZXJ5b25lLiBNb3JlIEAgaHR0cDovL2dvby5nbC83QUp6YkwgLS0+Cjxzdmcgd2lkdGg9IjM4IiBoZWlnaHQ9IjM4IiB2aWV3Qm94PSIwIDAgMzggMzgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSIgc3Ryb2tlLXdpZHRoPSIyIj4KICAgICAgICAgICAgPGNpcmNsZSBzdHJva2Utb3BhY2l0eT0iLjUiIGN4PSIxOCIgY3k9IjE4IiByPSIxOCIvPgogICAgICAgICAgICA8cGF0aCBkPSJNMzYgMThjMC05Ljk0LTguMDYtMTgtMTgtMTgiPgogICAgICAgICAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0KICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iCiAgICAgICAgICAgICAgICAgICAgdHlwZT0icm90YXRlIgogICAgICAgICAgICAgICAgICAgIGZyb209IjAgMTggMTgiCiAgICAgICAgICAgICAgICAgICAgdG89IjM2MCAxOCAxOCIKICAgICAgICAgICAgICAgICAgICBkdXI9IjFzIgogICAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+CiAgICAgICAgICAgIDwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
    });

    // Smooth scrolling
    var scroll = new SmoothScroll('a[href*="#"]', {
        offset: function (anchor, toggle) {
            var headerHeight = $(".droopmenu-navbar").height();
            var quicklinksHeight = $("#quicklinks-navigation").height();
            var additionalOffset = 50;

            window.anchor = anchor;
            window.toggle = toggle;

            if ($("#quicklinks-navigation").hasClass('is-sticky')) {
                return (headerHeight + quicklinksHeight) + additionalOffset;
            } else {
                return headerHeight;
            }
        },
        speed: 400,
        speedAsDuration: true,
        durationMax: 500,
        updateURL: false
    });
});
