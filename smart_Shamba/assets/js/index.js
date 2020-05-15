window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

        document.getElementById('header').style.height = '70px';
        document.getElementById('header').style.background = '#f8f9fa';
        document.getElementById('header').style.borderBottom = '1px solid #ddd';
        document.getElementById('navbar-brand').style.width = '70px';
        document.getElementById('navbar-brand').style.marginTop = '-0px';
        document.getElementById('navbar-brand').style.marginBottom = '20px';
        document.getElementById('brand').style.marginTop = '-67px';
        document.getElementById('brand').style.marginLeft = '60px';
        document.getElementById('brand').style.fontSize = '20px';
        document.getElementById('brand').style.color = '#548005';
        document.getElementById('active').style.color = '#548005';
        document.getElementById('nav-link').style.marginTop = '2px';
        document.getElementById('nav-link').style.marginBottom = '10px';
        document.getElementById('about').style.color = '#6c757d';
        document.getElementById('service').style.color = '#6c757d';
        document.getElementById('work').style.color = '#6c757d';
        document.getElementById('team').style.color = '#6c757d';
        document.getElementById('contact').style.color = '#6c757d';
    }

    else {

        document.getElementById('header').style.height = '96px';
        document.getElementById('header').style.background = 'transparent';
        document.getElementById('header').style.borderBottom = '' ;
        document.getElementById('navbar-brand').style.width = '75px';
        document.getElementById('navbar-brand').style.marginTop = '35px';
        document.getElementById('navbar-brand').style.marginBottom = '20px';
        document.getElementById('brand').style.marginTop = '-74px';
        document.getElementById('brand').style.marginLeft = '68px';
        document.getElementById('brand').style.fontSize = '24px';
        document.getElementById('brand').style.color = '#87b337';
        document.getElementById('active').style.color = '#87b337';
        document.getElementById('nav-link').style.marginTop = '35px';
        document.getElementById('nav-link').style.marginBottom = '-50px';
        document.getElementById('about').style.color = '#f8f9fa';
        document.getElementById('service').style.color = '#f8f9fa';
        document.getElementById('work').style.color = '#f8f9fa';
        document.getElementById('team').style.color = '#f8f9fa';
        document.getElementById('contact').style.color = '#f8f9fa';
    }
}

