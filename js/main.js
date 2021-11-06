

$(window).on('load', function() {


    // Loading
    $(".box-loading").delay(0).fadeOut('slow', function(){
        $(this).remove().fadeOut();
    });

    /* Owl Carousel */
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        animateIn: 'flipInX',
        items:1,
        smartSpeed:450,
        dots: true,
        loop: true,
        autoplay:true,
        autoplayTimeout: 5000,
    });

    ///////////////////////////////////////////////

    // Navbar on Scroll

    $(window) .on('scroll' , function () { 

        if ( $(window).scrollTop() > 60 ) {

            $('.header nav') .addClass('active-nav');

        } else {

            $('.header nav') .removeClass('active-nav');

        }

    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // ScrollTop 

    $('.scroll').click(function(){
        $('body, html').animate({
            scrollTop: 0
        }, 1200);
    });

    $(window).scroll(function(){

        if ( $(window).scrollTop() > 600 ) {
            
            $('.scroll').css({
                opacity: 1
            });

        } else{

            $('.scroll').css({
                opacity: 0
            });

        }
    });

    /////////////////////////////////////////////////

        // Slick Carousel
        $('#slider').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            prevArrow: '<span class="prev-arrow"><i class="fas fa-angle-left"></i></span>',
            nextArrow: '<span class="next-arrow"><i class="fas fa-angle-right"></i></span>',
            responsive: [{
                breakpoint: 1024,
                settings: {
                slidesToShow: 4,
                }
        
    
            }, {
        
                breakpoint: 992,
                settings: {
                slidesToShow: 4,
                }
    
            }, {
        
                breakpoint: 800,
                settings: {
                slidesToShow: 3,
                }
        
            }, {
        
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                }
        
            }, {
        
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                }
    
            }]
                
        });

    // Slick Carousel
    $('.slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<span class="prev-arrow"><i class="fas fa-angle-left"></i></span>',
        nextArrow: '<span class="next-arrow"><i class="fas fa-angle-right"></i></span>',
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
            }
      

         }, {
      
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
            }

         }, {
      
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
            }
      
          }, {
      
            breakpoint: 550,
            settings: {
                slidesToShow: 2,
            }
      
          }, {
      
            breakpoint: 450,
            settings: {
                slidesToShow: 1,
            }

          }]
            
    });

    ///////////////////////////////////////////////////////








 

});