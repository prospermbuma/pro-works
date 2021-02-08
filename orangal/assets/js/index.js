// Navigation
const menu = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 230) {
        menu.style.backgroundColor = '#f8f9fa';
        $('.active, .afya').css('color', '#000');
        $('.active').css('transition', 'color 0.5s ease-in-out');
        $('.inactive, .navbar-toggler').css('color', '#808080');
        $('.navbar-toggler').css('backgroundColor', '#767676');
    }
    else {
        menu.style.backgroundColor = 'rgba(9, 32, 6, 0.575)';
        $('.active, .afya').css('color', 'rgb(255,255,255)');
        $('.inactive').css('color', 'rgba(255,255,255,.55)');
        $('.navbar-toggler').css('backgroundColor', 'initial');
    }
});

// Get Full Year
$('#year').text(new Date().getFullYear());

// Go Top
const gtop = document.querySelector('.go-top');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        gtop.style.display = 'block';
    }
    else {
        gtop.style.display = 'none';
    }
});
