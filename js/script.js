$(document).ready(function() {
    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $('body').materialScrollTop({   // Scroll to the top of <body> element ...
        padding: 100,               // ... and add padding 100px
        revealElement: 'nav',    // Reveal button when scrolling over <header> ...
        revealPosition: 'bottom',   // ... and do it at the end of </header> element
        duration: 600,              // Animation will run 600 ms
        easing: 'swing',            // Do it with swing animation
        onScrollEnd: function() {
            console.log('Scrolling End');
        }
    });

    if ($('#mastery-container').length !=0 ) {
        $(window).resize(function() {
            let new_width = $('#mastery-container').parent().parent().parent().width();
            let origin_width = 985;
            let ratio = new_width / origin_width;
            $('#mastery-container').css('transform', 'scale(' + ratio.toString() + ',' + ratio.toString() + ')');
            $('#mastery-container').css('transform-origin', 'left top');
        });
        $(window).resize();
    }
})