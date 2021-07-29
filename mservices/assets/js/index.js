/* ==================================================
# Image Slider
===================================================*/
let hero_slider = document.querySelector('#hero');
let images = ["../img/32.jpg", "../img/33.jpg", "../img/34.jpg"];

for (let image of images) {
    setTimeout(() => {
        hero_slider.src = image[i];
    }, 3000);
}