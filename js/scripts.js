jQuery(function($) {
    "use strict";

    //Preloader
    $(window).on('load', function() {
        $('body').delay(500).addClass('loaded').find('.page-loader').fadeOut(1000);
    });

    //Back To Top
    $("#back-top").hide();

    // fade in #back-top
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 500) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
    });

    $('#back-top').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

    //Change Menu Background color On Scroll
    $(window).on('ready , scroll', function() {
        if ($(window).scrollTop() > 30) {
            $('.header').addClass('active');
        } else {
            $('.header').removeClass('active');
            $('.header .nav li').removeClass('current');
        }
    });

    //OnePage Nav
    $('.nav').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing'
    });

    //Clients Carousel
    $(".clients").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        autoHeight: false,
        pagination: false,
        touchDrag: true,
        navigation: true,
        navigationText: [
            "<i class='fa fa-angle-double-left'></i>",
            "<i class='fa fa-angle-double-right'></i>"
        ],
        items: 5,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
    });

    //Features Carousel
    $(".features-carousel").owlCarousel({
        autoHeight: false,
        pagination: false,
        touchDrag: true,
        navigation: true,
        navigationText: [
            "<i class='fa fa-angle-double-left'></i>",
            "<i class='fa fa-angle-double-right'></i>"
        ],
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
    });

    //Testimonial Carousel
    $(".testimonial-carousel").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        autoHeight: false,
        touchDrag: true,
        items: 2,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 1]
    });

    //Skill Progress Bar
    $('.skill-progress-bar > span').each(function() {
        var $this = $(this);
        var width = $(this).data('percent');
        $this.css({
            'transition': 'width 2.5s'
        });

        setTimeout(function() {
            $this.filter(':visible').waypoint(function(direction) {
                if (direction === 'down') {
                    $this.css('width', width + '%');
                }
            }, {
                offset: '100%'
            });
        }, 500);
    });

    //Typed / Text-rotator
    $(".element").each(function() {
        var $this = $(this);
        $this.typed({
            strings: $this.attr('data-elements').split(','),
            typeSpeed: 100,
            backDelay: 4000,
            loop: true,
            loopCount: false,
            callback: function() {
                foo();
            },
            resetCallback: function() {
                newTyped();
            }
        });
    });
    
    function foo() {
        console.log("Callback");
    }

    //Work Filter
    $('.p-filter').mixItUp();
    $('.filters li a').on('click', function(event) {
        $('.filter.selected').removeClass('selected');
    });

    //Magnific Popup
    $('.work-item').magnificPopup({
        delegate: 'a.img-popup', // child items selector, by clicking on it popup will open
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        removalDelay: 200,
        mainClass: 'mfp-fade',
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        },
        gallery: {
            enabled: true
        }
    });

    //About Tabs
    jQuery('.tabs .tab-links a').on('click', function(e) {
        var currentAttrValue = jQuery(this).attr('href');

        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).fadeIn(500).siblings().hide();;

        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });

    //Features Tabs
    jQuery('.features-tabs .carousel-tabs li a').on('click', function(e) {
        var currentAttrValue = jQuery(this).attr('href');

        // Show/Hide Tabs
        jQuery('.features-tabs ' + currentAttrValue).fadeIn(500).siblings().hide();;

        // Change/remove current tab to active
        jQuery('.carousel-tabs li').removeClass('active');
        jQuery('.carousel-tabs a[href$="' + currentAttrValue + '"]').parent().addClass('active');

        e.preventDefault();
    });

    //Wow / Reveal animation on scroll
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: false, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    });
    wow.init();

    //Contact Form
    $('#contact-form').on('submit', function() {
        var $form = $(this);
        var data = $(this).serialize();

        $.ajax({
                url: 'contact.php',
                type: 'POST',
                data: data,
            })
            .done(function(res) {
                if (res && !$(res).hasClass('failure')) {
                    $form.find('input, textarea').val('');
                }
            })
            .always(function(res) {
                $('#ajax-message').html(res);
            });

        // Shows Ajax Loader right after clicking on the submit button. 
        $('#ajax-message').append('<div class="ajax-loader"></div>');

        setTimeout(function() {
            $("#ajax-message").hide()
        }, 8000);

        return false;
    });
});