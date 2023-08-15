
/* ==================================================
#  Initialize AOS
===================================================*/
AOS.init({
   offset: 100,
   duration: 1000,
   easing: "ease-in-out"
});

/* =====================================================
# Navigation
===================================================== */
const navbar = document.querySelector(".navbar");
const nav_brand = document.querySelector(".navbar #logo");
const nav_link_change = document.querySelectorAll(".navbar .change-Color");
const nav_btn_give = document.querySelector(".give");

window.addEventListener('scroll', () => {
   if (window.scrollY > 50) {
      navbar.style.background = "hsl(0, 0%, 100%, .9)";
      navbar.style.boxShadow = "0 3px 10px rgba(0, 0, 0, 0.1)";
      navbar.style.backdropFilter = "blur(10px)";
      navbar.style.top = "0";
      nav_brand.src = "assets/img/logo/logo3.png";
      nav_link_change.forEach(link => {
         link.style.color = "#000";
      });
      nav_btn_give.style.color = "#419203";
   }
   else {
      navbar.style.background = "transparent";
      navbar.style.boxShadow = "none";
      navbar.style.backdropFilter = "none";
      navbar.style.top = "22px";
      nav_brand.src = "assets/img/logo/logo2.png";
      nav_link_change.forEach(link => {
         link.style.color = "#f8f9fa";
      });
      nav_btn_give.style.color = "#fff";
   }
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