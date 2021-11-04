
$(document).ready(function() {


    /* Owl Carousel */
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        animateIn: 'flipInX',
        items:1,
        smartSpeed:450,
        dots: true,
        loop: true,
    });

    /////////////////////////////////////////////////

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








 

});