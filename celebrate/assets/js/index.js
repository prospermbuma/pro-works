/* ==================================================
# Search Input
===================================================*/
// const search_input = document.querySelector('#search');

// search_input.addEventListener('input', () => {
//     const search_icon = document.querySelector('.fa-search');
//     search_icon.style.display = "none";
// })

// search_input.addEventListener('keydown', () => {
//     const search_icon = document.querySelector('.fa-search');
//     search_icon.style.display = "block";
// })

/* ==================================================
# Getting the current year
===================================================*/
const today = new Date();
const year = today.getFullYear();
const currentYear = document.querySelector('#year');
currentYear.innerHTML = year;

/* ==================================================
# Smooth Scroll
===================================================*/
$('.navbar a, .nav-brand, .go_top a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

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
    if (window.pageYOffset > 100) {
        goTop.classList.add('active');
    } else {
        goTop.classList.remove('active');
    }
});

/* ==================================================
# Toggling navbar on scroll
===================================================*/
const navbar = document.querySelector('.navbar');
const section = document.querySelector('section');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > section.offsetHeight) {
        navbar.classList.add('toggle');
    }
    else {
        navbar.classList.remove('toggle');
    }
});

/* ========================================================================
# Making navbar smaller as the document's height is greater than 100px.
# And it should only be applied to the big screens with width than 768px.
=========================================================================*/
const smaller_navbar = document.querySelector('.navbar');
const navBrand_text = document.querySelector('.navbar .nav-brand .brand-text');
const navBrand_logo = document.querySelector('.navbar .nav-brand .brand-logo');
const nav_links = document.querySelectorAll('.navbar .navbar-nav .nav-item .nav-link');

window.addEventListener('scroll', function () {
    $(document).ready(function () {
        if ($(window).width() > 1060) {
            if (window.pageYOffset > 100) {
                smaller_navbar.style.height = '65px';
                navBrand_text.style.fontSize = '17px';
                nav_links.forEach(navLink => {
                    navLink.style.fontSize = '16px';
                });
            }
            else {
                smaller_navbar.style.height = '70px';
                navBrand_text.style.fontSize = '20px';
                nav_links.forEach(navLink => {
                    navLink.style.fontSize = '17px';
                });
            }
        }
    });
});