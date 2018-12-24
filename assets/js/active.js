$( document ).ready(function () {

    //Client Say start
    $("#client_say").owlCarousel({
        nav:true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        items:1,
        loop:true,
        margin:5,
        dots:true,
        autoplay:true,
        smartSpeed:1000,
        autoplayTimeout:4000,
    });
    //Client Say start

        //Bar filler
    $('#bar1').barfiller({ barColor: '#0d9c86',duration: 3000 });
    $('#bar2').barfiller({ barColor: '#2091eb'});
    $('#bar3').barfiller({ barColor: '#fc6',duration: 3000  });
    $('#bar4').barfiller({ barColor: '#996413'});
    $('#bar5').barfiller({ barColor: '#f4645f', duration: 3000 });
    //Bar filler

    // Counter Up
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    $('.counter').addClass('animated fadeInDownBig');
    $('h3').addClass('animated fadeIn');
    //counter up

    $('.iso-items').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });
// Isotope click function
    $('.iso-nav ul li').click(function(){
        $('.iso-nav ul li').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $('.iso-items').isotope({
            filter: selector
        });
        return false;
    });

});

