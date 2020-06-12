/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function () {
    // FitVids init
    $("#main").fitVids();

    // Sticky sidebar
    var stickySideBar = function () {
        var show =
            $(".author__urls-wrapper button").length === 0
                ? $(window).width() > 1024 // width should match $large Sass variable
                : !$(".author__urls-wrapper button").is(":visible");
        if (show) {
            // fix
            $(".sidebar").addClass("sticky");
        } else {
            // unfix
            $(".sidebar").removeClass("sticky");
        }
    };

    stickySideBar();

    $(window).resize(function () {
        stickySideBar();
    });

    // Follow menu drop down
    $(".author__urls-wrapper button").on("click", function () {
        $(".author__urls").toggleClass("is--visible");
        $(".author__urls-wrapper button").toggleClass("open");
    });

    // Close search screen with Esc key
    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            if ($(".initial-content").hasClass("is--hidden")) {
                $(".search-content").toggleClass("is--visible");
                $(".initial-content").toggleClass("is--hidden");
            }
        }
    });

    // Search toggle
    $(".search__toggle").on("click", function () {
        $(".search-content").toggleClass("is--visible");
        $(".initial-content").toggleClass("is--hidden");
        // set focus on input
        setTimeout(function () {
            $(".search-content input").focus();
        }, 400);
    });

    // Smooth scrolling
    var scroll = new SmoothScroll('a[href*="#"]', {
        offset: 120,
        speed: 400,
        speedAsDuration: true,
        durationMax: 500,
        updateURL: false
    });

    // Gumshoe scroll spy init
    if ($("nav.toc").length > 0) {
        var spy = new Gumshoe("nav.toc a", {
            // Active classes
            navClass: "active", // applied to the nav list item
            contentClass: "active", // applied to the content

            // Nested navigation
            nested: false, // if true, add classes to parents of active link
            nestedClass: "active", // applied to the parent items

            // Offset & reflow
            offset: 20, // how far from the top of the page to activate a content area
            reflow: true, // if true, listen for reflows

            // Event support
            events: true // if true, emit custom events
        });
    }

    // add lightbox class to all image links
    $(
        "a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']"
    ).addClass("image-popup");

    // Magnific-Popup options
    $(".image-popup").magnificPopup({
        // disableOn: function() {
        //   if( $(window).width() < 500 ) {
        //     return false;
        //   }
        //   return true;
        // },
        type: "image",
        tLoading: "Loading image #%curr%...",
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">Image #%curr%</a> could not be loaded.'
        },
        removalDelay: 500, // Delay in milliseconds before popup is removed
        // Class that is added to body when popup is open.
        // make it unique to apply your CSS animations just to this exact popup
        mainClass: "mfp-zoom-in",
        callbacks: {
            beforeOpen: function () {
                // just a hack that adds mfp-anim class to markup
                this.st.image.markup = this.st.image.markup.replace(
                    "mfp-figure",
                    "mfp-figure mfp-with-anim"
                );
            }
        },
        closeOnContentClick: true,
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });

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

    $("#industry-pagination > li > a").click(function (e) {
        e.preventDefault();

        $("#industry-pagination > li").find("a").each(function () {
            $(this).removeClass("current")
        });

        $("#industry-filter").find("div").each(function () {
            $(this).hide();
        });

        $(this).addClass('current');
        $(".industry-filter-" + $(this).text()).removeClass("hidden").show();

        return false;
    });


    if (window.location.pathname === '/tools/ip-address-finder') {
        // Request user IP from apps service
        $.ajax({
            url: "https://apps.keepaliveit.co.uk/ip/index.php",
            cache: false
        })
            .done(function (result) {
                $("#ip-address-result").html(result.ip);
            });
    }
    
    if (window.location.pathname === '/') {
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
    }

    // Setup menu hover
    function updateHelpText(elem){
        $ht = $("#helptext");

        if($ht.css('display') == 'none') {
            $ht.show();
        }

        $ht.text(elem.data('helptext'));
    }

    // Menu depth = 1
    $('ul.exo-menu > li.drop-down > ul > li').hover(
        function () {
            $(this).parent().parent().children('a').addClass('active');
            updateHelpText($(this));
        },
        function () {
            $(this).parent().parent().children('a').removeClass('active');
        }
    );

    // Menu depth = 2
    $('ul.exo-menu > li.drop-down > ul > li > ul > li').hover(
        function () {
            $(this).parent().parent().children('a').addClass('active');
            updateHelpText($(this));
        },
        function () {
            $(this).parent().parent().children('a').removeClass('active');
        }
    );

    // Menu depth = 3
    $('ul.exo-menu > li.drop-down > ul > li > ul > li > ul > li').hover(
        function () {
            $(this).parent().parent().children('a').addClass('active');
            updateHelpText($(this));
        },
        function () {
            $(this).parent().parent().children('a').removeClass('active');
        }
    );

    $('ul.exo-menu > li.mega-drop-down > .mega-menu').hover(
        function () {
            $(this).parent().children('a').addClass('active');
        },
        function () {
            $(this).parent().children('a').removeClass('active');
        }
    );

    $('ul.exo-menu > li.blog-drop-down > .blog-menu').hover(
        function () {
            $(this).parent().children('a').addClass('active');
        },
        function () {
            $(this).parent().children('a').removeClass('active');
        }
    );

    $('.toggle-menu').click(function(){
        $('.exo-menu').toggleClass('display');

    });
});
