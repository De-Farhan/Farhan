// wow animate js start
new WOW().init();
// wow animate js end

// color switcher js script start
var colorSheets = [
  {
    color: "#008040",
    title: "Switch to Default",
    href: "css/color/color_default.css"
  },
  {
      color: "#cb218d",
      title: "Switch to Magenta",
      href: "css/color/color_magenta.css"
  },
  {
      color: "#9900cc",
      title: "Switch to Violet",
      href: "css/color/color_violet.css"
  },
  {
      color: "#ec9f05",
      title: "Switch to Yellow",
      href: "css/color/color_yellow.css"
  },
  {
      color: "#ff0000",
      title: "Switch to Red",
      href: "css/color/color_red.css"
  },
  {
    color: "#3366ff",
    title: "Switch to Blue",
    href: "css/color/color_blue.css"
}
];
ColorSwitcher.init(colorSheets);
// color switcher js script end

//  navbar collapse js
$("#navbar ul li a").on("click", function () {
  $("#navbar .navbar-collapse").collapse("hide");
});
// navbar collapse js end

// Add scrollspy to <body>
$(document).ready(function () {
  $("body").scrollspy({ target: "#navbar", offset: 10 });
});
// // Add scrollspy to <body>

// Add scrollspy to banner part
$(document).ready(function () {
  $("body").scrollspy({ target: "#banner_part", offset: 10 });
});
// Add scrollspy to banner part

// Add smooth scrolling on all links inside the navbar
$(document).ready(function () {
  $("#navbar ul li a, #banner_btn, #to_top a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1000,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
// Add smooth scrolling on all links inside the navbar

// start fixed navigation
$(window).on("scroll", function () {
  var scrollamount = $(window).scrollTop();
  if (scrollamount >= 1) {
    $(".navbar").addClass("nav_fixed");
  } else {
    $(".navbar").removeClass("nav_fixed");
  }
});
// end fixed navigation

// clients slider js start
$("#clients_part .clients_item").slick({
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow: '<i class="fas fa-angle-right left"></i>',
  nextArrow: '<i class="fas fa-angle-left right"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
// clients slider js end

// fixed to top button
$(window).on("scroll", function () {
  var scrollamount = $(window).scrollTop();
  if (scrollamount >= 1220) {
    $("#to_top").addClass("to_top_fixed");
  } else {
    $("#to_top").removeClass("to_top_fixed");
  }
});
// fixed to top button

