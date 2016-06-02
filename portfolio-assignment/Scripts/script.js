jQuery(document).ready(function () {

    $(".siteLoadUp").fadeOut("slow");
});




jQuery(document).ready(function () {
    jQuery('#slide').slippry({
        adaptiveHeight: false, // height of the sliders adapts to current 
        captions: false,

        // pager
        pagerClass: 'news-pager',

        // transitions
        transition: 'horizontal', // fade, horizontal, kenburns, false
        speed: 8000,
        pause: 1500,

        // slideshow
        autoDirection: 'prev'
    })
});




$(document).ready(function () {
    new WOW().init();
});
$(document).ready(function () {
    $('.skillInfo').fadeOut();
    $('#aboutbox1').mouseenter(function () {
        $('.skillInfo').fadeIn();
    });
    $('#aboutbox1').mouseleave(function () {
        $('.skillInfo').fadeOut(0);
    });

});

$(document).ready(function () {
    $('.appInfo').fadeOut();
    $('#aboutbox2').mouseenter(function () {
        $('.appInfo').fadeIn();
    });
    $('#aboutbox2').mouseleave(function () {
        $('.appInfo').fadeOut(0);
    });

});


$(document).ready(function () {
    $('.designInfo').fadeOut();
    $('#aboutbox').mouseenter(function () {
        $('.designInfo').fadeIn();
    });
    $('#aboutbox').mouseleave(function () {
        $('.designInfo').fadeOut(0);
    });

});





$(document).ready(function () {



    $(".designInfo").hide();
    $('#designButton').click(function () {
        $('.designInfo').fadeToggle(300);
    });
});






$(document).ready(function () {
    $('#portImgText').hide();
    $('#fadeImg').fadeTo('fast', .3)
    $('#fadeImg').mouseenter(function () {
        $('#fadeImg').fadeTo('fast', 1);
        $('#portImgText').fadeTo('fast', 1);
    });
    $('#fadeImg').mouseleave(function () {
        $('#fadeImg').fadeTo('fast', .3);
        $('#portImgText').hide();
    });
});




$(document).ready(function () {
    $('#portImgText2').hide();
    $('#fadeImg2').fadeTo('fast', .3);
    $('#fadeImg2').mouseenter(function () {
        $('#fadeImg2').fadeTo('fast', 1);
        $('#portImgText2').fadeTo('fast', 1);
    });
    $('#fadeImg2').mouseleave(function () {
        $('#fadeImg2').fadeTo('fast', .3);
        $('#portImgText2').hide();
    });
});

$(document).ready(function () {

    $('#fadeImg3').fadeTo('fast', .3);
    $('#fadeImg3').mouseenter(function () {
        $('#fadeImg3').fadeTo('fast', 1);
    });
    $('#fadeImg3').mouseleave(function () {
        $('#fadeImg3').fadeTo('fast', .3);
    });
});


$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});
