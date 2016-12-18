jQuery(window).on('load', function() {

    $(".hero-slider").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        mouseDrag: false
    });

    homeHeight();

});

jQuery(window).on('resize', function() {
    homeHeight();
});

jQuery(document).on('ready', function() {
    homeHeight();
});

function homeHeight() {
    var wh = jQuery(window).height();
    jQuery('.hero-slider, .hero-slider .item, .zoomin-slider, .hero-parallax, .hero-video').css('height', wh);
}

$('.hero-slider .item').css('background-image', function() {
    var bg = 'url(' + $(this).data('background') + ')';
    return bg;
});