
/* ==================================================
#  Initialize AOS
===================================================*/
AOS.init({
   offset: 100,
   duration: 1000,
   easing: "ease-in-out"
});

/* ==================================================
# Smooth Scroll
===================================================*/
$('.navbar a, .nav-brand, .footer-nav a, .go_top a').on('click', function (e) {
   if (this.hash !== '') {
      // e.preventDefault();
      const hash = this.hash;
      $('html, body').animate({
         scrollTop: $(hash).offset().top
      }, 800);
   }
});

/* ==================================================
# Back To Top
===================================================*/
const goTop = document.querySelector('.go_top');

window.addEventListener('scroll', () => {
   if (window.scrollY > 100) {
      goTop.classList.add('active');
   } else {
      goTop.classList.remove('active');
   }
});

/* ==================================================
# Getting the current year
===================================================*/
const today = new Date();
const year = today.getFullYear();
const currentYear = document.querySelector('#year');
currentYear.innerHTML = year;