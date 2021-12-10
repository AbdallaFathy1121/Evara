
$(window).on('load', function() {

    // Filter Price
    $(".shop .filter .js-range-slider").on("change", function(){
        $(".shop .filter .max").val( $(".shop .filter .irs-to").text() );
        $(".shop .filter .min").val( $(".shop .filter .irs-from").text() );
    });
  
    // Swiper Liberary

    $(function () {
      'use strict';
      var swiper = new Swiper('.swiper-container', {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides:true,
          slidesPerView: 'auto',
          loop: false,
          coverflowEffect: {
              rotate: 30,
              stretch: 10,
              depth: 100,
              modifier: 2,
              slideShadows : true,
          },
          pagination: {
              el: '.swiper-pagination'
          },
          navigation : {
              nextEl: '.swiper-button-next',
              prevEl:'.swiper-button-prev'
          }
      });
      swiper.slideTo(3, false,false);
    });

    /////////////////////////////////////////////

    // ScrollTop 

    $('.scroll').click(function(){
      $('body, html').animate({
          scrollTop: 0
      }, 1200);
    });

    $(window).scroll(function(){

        if ( $(window).scrollTop() > 100 ) {
            
            $('.scroll').css({
                opacity: 1,
                bottom: '3%'
            });

        } else{

            $('.scroll').css({
                opacity: 0,
                bottom: '90%'
            });

        }
    });

    ///////////////////////////////////////////////////////////

    // Loading
    $(".box-loading").delay(0).fadeOut('slow', function(){
        $(this).remove().fadeOut();
    });

    ////////////////////////////////////////////////////////////

    // Manage Profile Pages & Tabs

    $(".account .tabs li").click(function(){
      $(this).addClass("active").siblings().removeClass("active");
    });

    $(".account .tabs .orders").click(function(){
      $(".account .pages .page").removeClass("active");
      $(".account .pages .orders").addClass("active");
    });

    $(".account .tabs .dashboard").click(function(){
      $(".account .pages .page").removeClass("active");
      $(".account .pages .dashboard").addClass("active");
    });

    $(".account .tabs .details").click(function(){
      $(".account .pages .page").removeClass("active");
      $(".account .pages .details").addClass("active");
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

    /////////////////////////////////////////////

    // ScrollTop 

    $('.scroll').click(function(){
        $('body, html').animate({
            scrollTop: 0
        }, 1200);
    });

    $(window).scroll(function(){

        if ( $(window).scrollTop() > 100 ) {
            
            $('.scroll').css({
                opacity: 1
            });

        } else{

            $('.scroll').css({
                opacity: 0
            });

        }
    });

    var Top = 0;
    $(window).on('scroll',function(){
      var scrollTop = $(this).scrollTop();
      if (scrollTop > Top)    {
        $('.navbar').addClass('animate');
      } else {
        $('.navbar').removeClass('animate');
      }
      Top = scrollTop;
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

    ///////////////////////////////////////////////////////





});





particlesJS('particles-js',
  
{
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#fff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#fff"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#fff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
  "config_demo": {
    "hide_card": false,
    "background_color": "#b61924",
    "background_image": "",
    "background_position": "50% 50%",
    "background_repeat": "no-repeat",
    "background_size": "cover"
  }
}

);
