/* ==================================================
# Display Projects
===================================================*/
const all = document.querySelector('#all');
const all_row = document.querySelector('#all-row');
const commercial = document.querySelector('#commercial');
const commercial_row = document.querySelector('#commercial-row');
const residential = document.querySelector('#residential');
const residential_row = document.querySelector('#residential-row');
const industrial = document.querySelector('#industrial');
const industrial_row = document.querySelector('#industrial-row');
const projects_links = document.querySelector('.projects-links');

window.onscroll = () => {
    if (window.pageYOffset > 550) {
        projects_links.classList.add('projects-links-sticky');
        $('.project_links').slideDown();
    }
    else {
        projects_links.classList.remove('projects-links-sticky');
        $('.project_links').slideUp();
    }
}

all.addEventListener('click', () => {
    all_row.style.display = 'block';
    commercial_row.style.display = 'none';
    residential_row.style.display = 'none';
    industrial_row.style.display = 'none';
    all.classList.add('active');
    all_row.classList.add('zoom-in');
    commercial.classList.remove('active');
    residential.classList.remove('active');
    industrial.classList.remove('active');
})

commercial.addEventListener('click', () => {
    commercial_row.style.display = 'block';
    commercial.classList.add('active');
    commercial_row.classList.add('zoom-in');
    all.classList.remove('active');
    residential.classList.remove('active');
    industrial.classList.remove('active');
    all_row.style.display = 'none';
    residential_row.style.display = 'none';
    industrial_row.style.display = 'none';
})

residential.addEventListener('click', () => {
    residential_row.style.display = 'block';
    residential_row.classList.add('zoom-in');
    all_row.style.display = 'none';
    commercial_row.style.display = 'none';
    industrial_row.style.display = 'none';
    residential.classList.add('active');
    commercial.classList.remove('active');
    all.classList.remove('active');
    industrial.classList.remove('active');
})

industrial.addEventListener('click', () => {
    industrial_row.style.display = 'block';
    industrial_row.classList.add('zoom-in');
    all_row.style.display = 'none';
    commercial_row.style.display = 'none';
    residential_row.style.display = 'none';
    industrial.classList.add('active');
    residential.classList.remove('active');
    commercial.classList.remove('active');
    all.classList.remove('active');
})
