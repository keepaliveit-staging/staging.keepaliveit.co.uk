import './plugins/accordion.min'

import './pushy'

$(document).ready(function () {

    var $el, $p, $ps, $up, totalHeight;

    $(".sidebar-box .button").click(function () {
        totalHeight = 0;

        $el = $(this);
        $p = $el.parent();
        $up = $p.parent();
        $ps = $up.find("p:not('.read-more')");

        // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
        $ps.each(function () {
            totalHeight += $(this).outerHeight();
        });

        // fade out read-more
        $p.hide();

        $up.css({
            // Set height to prevent instant jump-down when max height is removed
            "height": $up.height(),
            "max-height": 9999
        })
        .animate({
            "height": "100%"
        });

        // prevent jump-down
        return false;
    });


    // Masthead menu
    $("ul.droopmenu li.droopmenu-parent").hover(function () {
         $(".body-overlay").show();
    }, function(){
         $(".body-overlay").hide();
         $("#helptext").hide();

    });

});

