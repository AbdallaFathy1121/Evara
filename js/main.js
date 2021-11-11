

$(window).on('load', function() {

    // Loading
    $(".box-loading").delay(0).fadeOut('slow', function(){
        $(this).remove().fadeOut();
    });

    ////////////////////////////////////////////////////

        // SLick in Product page

        $('.slider-single').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: false,
            adaptiveHeight: true,
            infinite: true,
            useTransform: true,
            speed: 400,
            cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
        });
       
        $('.slider-nav')
            .on('init', function(event, slick) {
                $('.slider-nav .slick-slide.slick-current').addClass('is-active');
            })
            .slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                loop: true,
                focusOnSelect: true,
                adaptiveHeight: true,
                prevArrow: '<span class="prev-arrow"><i class="fas fa-angle-left"></i></span>',
                nextArrow: '<span class="next-arrow"><i class="fas fa-angle-right"></i></span>',
                infinite: true,
                responsive: [{
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                }]
            });
       
        $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
            $('.slider-nav').slick('slickGoTo', currentSlide);
            var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
            $('.slider-nav .slick-slide.is-active').removeClass('is-active');
            $(currrentNavSlideElem).addClass('is-active');
        });
       
        $('.slider-nav').on('click', '.slick-slide', function(event) {
            event.preventDefault();
            var goToSingleSlide = $(this).data('slick-index');
       
            $('.slider-single').slick('slickGoTo', goToSingleSlide);
        });
    
    /////////////////////////////////////////////////////

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

    // Size button active

    $(".product .right .size button").click (function() {
        $(this).addClass("active").siblings().removeClass("active");
    })
        
    ///////////////////////////////////////////////

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

    // Ion-RangeSlider

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 5000,
        from: 100,
        to: 1000,
        grid: true
    });

    //////////////////////////////////////////////////////

    // SLide Toggle (category & Sub Category)

    $(".shop .right .category ul li").click(function(){
        $(this).children(".sub-category").slideToggle();
    });

    /////////////////////////////////////////////////////

    $(".product .slick-slide").height( $(".product .slider-single .item").height() );



 

});