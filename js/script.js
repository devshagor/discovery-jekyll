;(function($){
  'use strict';
  // Sticky
  var $is_sticky = $('.is-sticky');
  if ($is_sticky.length > 0 ) {
    var $win = $(window), $navm = $('#mainnav').offset();

    $win.scroll(function(){
      var $scroll = $win.scrollTop();
      if ($win.width() > 991) {
        if($scroll > $navm.top+4 ){
          if(!$is_sticky.hasClass('has-fixed')) $is_sticky.addClass('has-fixed');
        } else {
          if($is_sticky.hasClass('has-fixed')) $is_sticky.removeClass('has-fixed');
        }
      } else {
        if($is_sticky.hasClass('has-fixed')) $is_sticky.removeClass('has-fixed');
      }
    });
  }
  //Carousel
  var $has_carousel = $('.has-carousel');
  if ($has_carousel.length > 0 ) {
    $has_carousel.each(function(){
      var $self = $(this);
      var c_item = ($self.data('items')) ? $self.data('items') : 4;
      var c_item_t = (c_item >= 3) ? 3 : c_item;
      var c_item_m = (c_item_t >= 2) ? 2 : c_item_t;
      var c_delay =($self.data('delay')) ? $self.data('delay') : 6000;
      var c_auto =($self.data('auto')) ? true : false;
      var c_loop =($self.data('loop')) ? true : false;
      var c_dots = ($self.data('dots')) ? true : false;
      var c_navs = ($self.data('navs')) ? true : false;
      $self.owlCarousel({
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        items: c_item, loop: c_loop, nav: c_navs, dots: c_dots, margin: 30,
        autoplay: c_auto, autoplayTimeout: c_delay, autoplaySpeed: 700,
        responsive:{ 0:{ items:1 }, 480:{ items: c_item_m }, 768:{ items: c_item_t }, 1170:{ items: c_item } }
      });
    });
  }
  // LogoCarousel
  var $logo_carousel = $('.logo-carousel');
  if ($logo_carousel.length > 0 ) {
      $logo_carousel.owlCarousel({
        items: 5, loop: true, margin: 30, responsive:{0:{ items:2 }, 379:{ items:3 }, 720:{ items:4 }, 1280:{ items:6 } }
    });
  }
  // Active page menu when click
  var url = window.location.href;
  var $nav_link = $(".nav li a");
  $nav_link.each(function() {
      if (url === (this.href)) {
          $(this).closest("li").addClass("active");
      }
  });

  // Google map initialize
  var $mapholder = $('.map-holder');
  if ($mapholder.length > 0) {
    var map = new GMaps({
      div: '#gmap',
      lat: 40.67114083,
      lng: -73.97782063
    });
    $mapholder.on('click', function () { $(this).children().css("pointer-events", "auto"); });
    $mapholder.on('mouseleave', function() { $(this).children().css("pointer-events", "none"); });
  }
  // ImageBG 
  var $imageBG = $('.imagebg');
  if ($imageBG.length > 0) {
    $imageBG.each(function() {
      var $this = $(this), $this_img = $this.find('img'), img_src = $this_img.attr('src');
      if(img_src!=='' && typeof img_src !=='undefined') {
        $this.addClass('bgloaded').css('background-image', 'url('+ img_src +')');
      }
    });
  }
  // Image Popup
  var $image = $('.lense');
  if ($image.length > 0) {
    $image.magnificPopup({
        gallery: { enabled: true },
        type:'image'
      });
  }
 // particlesJS
  var $particles_js = $('#particles-js');
  if ($particles_js.length > 0 ) {
    particlesJS('particles-js',
    // Update your personal code.
        {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#00c0fa"
      },
      "shape": {
        "type": "circle",
        "opacity": 0.20,
        "stroke": {
          "width": 0,
          "color": "#2b56f5"
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
        "value": 0.30,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.12,
          "sync": false
        }
      },
      "size": {
        "value": 6,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.08,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#2b56f5",
        "opacity": 0.30,
        "width": 1.3
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
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
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
      "retina_detect": true
    }
    // Stop here.
      );
  }
})(jQuery);
jQuery(window).load(function() {
    jQuery('#preloader').fadeOut();
});