/* ==================================================
# Cart-Checkout
===================================================*/
const cart = document.querySelector('.navbar .cart');
const carts_checkout = document.querySelector('.navbar .carts');

cart.addEventListener('mouseenter', () => {
    carts_checkout.classList.add('show', 'animate-up');
})

carts_checkout.addEventListener('mouseleave', () => {
    carts_checkout.classList.remove('show', 'animate-up');
})

/* ==================================================
# User-account
===================================================*/
const user = document.querySelector('.navbar .user');
const user_account = document.querySelector('.navbar .user-account');

user.addEventListener('mouseup', () => {
    user_account.classList.add('show', 'animate-up');
})

user_account.addEventListener('mouseleave', () => {
    user_account.classList.remove('show', 'animate-up');
})

/* ==== User Email ==== */
const email = document.querySelector('#email');

email.addEventListener('focus', () => {
    email.classList.add('animate-gray');
    email.classList.remove('animate-primary');
})

email.addEventListener('blur', () => {
    email.classList.remove('animate-gray');
    email.classList.add('animate-primary');
})

/* ==== User Password And Eyes ==== */
const password = document.querySelector('#pswd');
password.addEventListener('focus', () => {
    password.classList.add('animate-gray');
    password.classList.remove('animate-primary');
})

password.addEventListener('blur', () => {
    password.classList.remove('animate-gray');
    password.classList.add('animate-primary');
})

const p_eye = document.querySelector('.fa-eye');
const p_eye_slash = document.querySelector('.fa-eye-slash');
p_eye.addEventListener('click', function() {
    p_eye.classList.add('hide');
    p_eye_slash.classList.add('show');
    if (password.getAttribute("type") === "password") {
        password.setAttribute("type", "text");
    }
})

p_eye_slash.addEventListener('click', function() {
    p_eye_slash.classList.remove('show');
    p_eye.classList.remove('hide');
    if (password.getAttribute("type") === "text") {
        password.setAttribute("type", "password");
    }
})

/* ==================================================
# Search Input
===================================================*/
const search_input = document.querySelector('#search');

search_input.addEventListener('focus', (e) => {
    e.preventDefault();
    search_input.classList.add('max-padding-right');
    search_input.classList.remove('min-padding-right');
});

search_input.addEventListener('keypress', () => {
    search_input.classList.add('max-padding-right');
    search_input.classList.remove('min-padding-right');
});

search_input.addEventListener('blur', (e) => {
    e.preventDefault();
    search_input.classList.remove('max-padding-right');
    search_input.classList.add('min-padding-right');
});

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
$('.navbar a, .nav-brand, .footer-nav a, .go_top a').on('click', function(e) {
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
    if (window.pageYOffset > 100) {
        goTop.classList.add('active');
    } else {
        goTop.classList.remove('active');
    }
});

/* ========================================================================
# Making navbar smaller as the document's height is greater than 100px.
# And it should only be applied to the big screens with width than 768px.
=========================================================================*/
const navbar = document.querySelector('.navbar');
const navBrand_text = document.querySelector('.navbar .nav-brand .brand-text');
const navBrand_logo = document.querySelector('.navbar .nav-brand .brand-logo');
const nav_links = document.querySelectorAll('.navbar .navbar-nav .nav-item .nav-link');

window.addEventListener('scroll', function() {
    $(document).ready(function() {
        if ($(window).width() > 1060) {
            if (window.pageYOffset > 100) {
                navbar.classList.add('min-height');
                navbar.classList.remove('max-height');
                navBrand_text.classList.add('min-font');
                navBrand_text.classList.remove('max-font');
                nav_links.forEach(navLink => {
                    navLink.classList.add('min-fonts');
                    navLink.classList.remove('max-fonts');
                });
            } else {
                navbar.classList.remove('min-height');
                navbar.classList.add('max-height');
                navBrand_text.classList.remove('min-font');
                navBrand_text.classList.add('max-font');
                nav_links.forEach(navLink => {
                    navLink.classList.remove('min-fonts');
                    navLink.classList.add('max-fonts');
                });
            }
        }
    });
});