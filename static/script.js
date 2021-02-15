(function ($) {
  "use strict";
  var NUXT = {};
  window.NUXT = NUXT;

  /*====== Sidenav - Side Navigation Menu ======*/
  NUXT.Sidenav = function () {
      var header = $(".site-header");
      var sidenav = $(".site-sidenav");
      header.on("click", ".button-open-sidenav", function () {
          sidenav.addClass("active");
      });
      sidenav.on("click", ".button-close-sidenav, .sidenav-close, .sidenav-menu a", function () {
          sidenav.removeClass("active");
      });
  };

  NUXT.SliderServices = function () {
    var rtl = $("body").attr("data-nuxt-rtl");
    var slider = $(".carousel-services-1");
    slider.owlCarousel({
        rtl: rtl,
        nav: true,
        loop: false,
        dots: false,
        items: 5,
        margin: 0,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            900: {
                items: 3
            },
            1200: {
                items: 4
            },
            1500: {
                items: 5
            }
        },
        navText: ['<i>«</i>', '<i>»</i>'],
    });
  };


  NUXT.SliderPosts = function () {
    var rtl = $("body").attr("data-nuxt-rtl");
    var slider = $(".carousel-blog-1");
    slider.owlCarousel({
        rtl: rtl,
        nav: false,
        loop: true,
        dots: true,
        items: 3,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            },
            1500: {
                items: 3
            }
        }
    });
};

})(jQuery);
