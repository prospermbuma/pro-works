// Back to top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
  } else {
    $('.back-to-top').fadeOut('slow');
  }
});

$('.back-to-top').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 1500, 'easeInOutExpo');
  return false;
});

// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

// Adding a smooth scroll
$('#main-header a, #Top').on('click', function (e) {
  // Check for hash value
  if (this.hash !== '') {
    // Prevent the default behaviour of a tag
    e.preventDefault();
    // Store hash
    const hash = this.hash;
    // Animate smooth scroll
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function () {
      // Add hash to url after scroll
      window.location.hash = hash;
    });
  }
});

// Initiating tooltip
$('[data-toggle]').tooltip();

// Testimonial slider
$(document).ready(function () {
  $('.slider').slick({
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeedy: 2000,
    speed: 3000,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    // centerMode: true
  });

});

// Initi AOS
AOS.init({
  duration: 800,
  easing: "ease-in-out"
});
