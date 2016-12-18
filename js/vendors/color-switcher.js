jQuery(document).on('ready', function() {

    // Color Changer

    $(".orange").on('click', function() {
        $("#colors").attr("href", "css/colors/orange.css");
        return false;
    });
    $(".light-blue").on('click', function() {
        $("#colors").attr("href", "css/colors/light-blue.css");
        return false;
    });
    $(".green-1").on('click', function() {
        $("#colors").attr("href", "css/colors/light-green.css");
        return false;
    });
    $(".yellow-1").on('click', function() {
        $("#colors").attr("href", "css/colors/dark-yellow.css");
        return false;
    });

    $(".yellow-2").on('click', function() {
        $("#colors").attr("href", "css/colors/light-yellow.css");
        return false;
    });

    $(".red").on('click', function() {
        $("#colors").attr("href", "css/colors/red.css");
        return false;
    });

    $(".purple-1").on('click', function() {
        $("#colors").attr("href", "css/colors/light-purple.css");
        return false;
    });

    $(".beige").on('click', function() {
        $("#colors").attr("href", "css/colors/beige.css");
        return false;
    });

    $(".golden").on('click', function() {
        $("#colors").attr("href", "css/colors/golden.css");
        return false;
    });

    $(".emerald").on('click', function() {
        $("#colors").attr("href", "css/colors/emerald.css");
        return false;
    });

    $(".aqua").on('click', function() {
        $("#colors").attr("href", "css/colors/aqua.css");
        return false;
    });

    $(".peach").on('click', function() {
        $("#colors").attr("href", "css/colors/peach.css");
        return false;
    });

    $("#color-switcher h2 a").on('click', function(e) {
        e.preventDefault();
        var div = $("#color-switcher");
        console.log(div.css("left"));
        if (div.css("left") === "-206px") {
            $("#color-switcher").animate({
                left: "0px"
            });
        } else {
            $("#color-switcher").animate({
                left: "-206px"
            });
        }
    });


    $(".colors li a").on('click', function(e) {
        e.preventDefault();
        $(this).parent().parent().find("a").removeClass("active");
        $(this).addClass("active");
    });
});