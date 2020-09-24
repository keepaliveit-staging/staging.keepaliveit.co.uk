/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function () {

    $('.droopmenu-navbar').droopmenu({
        dmArrow: false,
        dmAnimDelay: 0,
        dmShowDelay: 0,
        dmHideDelay: 0,
        dmAnimation: false
    });
    //$("div.droopmenu-nav > div > div > ul > li:nth-child(1)").addClass("dmopener");

    if ($("#quicklinks-navigation").length) {
        var waypoint = new Waypoint({
            element: document.getElementById('quicklinks-navigation'),
            handler: function (direction) {
                if (direction === 'down') {
                    $(this.element).addClass('is-sticky');
                } else if (direction === 'up') {
                    $(this.element).removeClass('is-sticky');
                }
            },
            offset: function () {
                var headerHeight = $(".droopmenu-navbar").height();
                return headerHeight;
            }
        });

        // Browser reload viewpoint position beyond element trigger, so show it.
        var waypoint2 = new Waypoint({
            element: document.getElementById('quicklinks-navigation'),
            offset: '100%',
            handler: function (direction) {
                console.log('fired number 2');
                if (direction === 'down') {
                    $(this.element).addClass('is-sticky');
                }
            }
        });
    }

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


    if (window.location.pathname === '/tools-and-utilities/ip-address-finder') {
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
    function updateHelpText(elem) {
        $ht = $("#helptext");

        if ($ht.css('display') == 'none') {
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

    $('.toggle-menu').click(function () {
        $('.exo-menu').toggleClass('display');

    });

    $(".pricing__action").click(function () {
        var packageElem = $(this).data("package");

        console.log(
            validate(
                {
                    email: "test@smsmaii"
                },
                {
                    email: {
                        email: true
                    }
                }
            )
        );

        Swal.fire({
            title: '<strong>Thank you!</strong>',
            icon: 'success',
            html:
                'You chose: </br>' +
                '<span style="color:#9a7f5f;font-style: italic;">' +
                packageElem.toString() +
                '</span>.' +
                '</br></br>' +
                'Please fill in your contact details so we can get back to you to complete your purchase:' +
                '</br></br>' +
                '<label for="swal-input1">Email Address:</label>' +
                '<input id="swal-input1" type="email" class="swal2-input" placeholder="contact@domain.com">' +
                '<label for="swal-input2">Phone Number:</label>' +
                '<input id="swal-input2" type="tel" class="swal2-input" placeholder="00000000000">',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
                '<i class="fa fa-paper-plane"></i> Send Details',
            confirmButtonAriaLabel: 'Send details',
            cancelButtonText:
                '<i class="fa fa-ban"></i> Cancel Purchase',
            cancelButtonAriaLabel: 'Cancel Purchase',
            preConfirm: function () {
                var email = document.getElementById('swal-input1').value;
                var phone = document.getElementById('swal-input2').value;

                var constraints = {
                    email: {
                        presence: true,
                        email: true
                    },
                    phone: {
                        presence: true,
                        format: {
                            pattern: /^\s*\(?(020[7,8]{1}\)?[ ]?[1-9]{1}[0-9{2}[ ]?[0-9]{4})|(0[1-8]{1}[0-9]{3}\)?[ ]?[1-9]{1}[0-9]{2}[ ]?[0-9]{3})\s*$/gm,
                            flags: "i",
                            message: "must be a valid UK phone number."
                        }
                    }
                };

                var result = validate({
                    email: email,
                    phone: phone,
                }, constraints);

                if (result.email) {
                    Swal.showValidationMessage(result.email);
                    return;
                }

                if (result.phone) {
                    Swal.showValidationMessage(result.phone);
                    return;
                }
            }
        });
    });

});
