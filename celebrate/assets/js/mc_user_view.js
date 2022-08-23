/* ==================================================
# User Password And Eyes
===================================================*/
/* ===== User-account-1 =====  */
const pass_word = document.querySelector('#sign_up .user-account #pswd_1');
const pass_word_2 = document.querySelector('#sign_up .user-account #pswd_2');

const pswd_eye = document.querySelector('#sign_up .user-account .pswd-1 .fa-eye');
pswd_eye.addEventListener('click', function() {
    pswd_eye.classList.add('hide');
    pswd_eye_slash.classList.add('show');
    if (pass_word.getAttribute("type") === "password") {
        pass_word.setAttribute("type", "text");
    }
})

const pswd_eye_slash = document.querySelector('#sign_up .user-account .pswd-1 .fa-eye-slash');
pswd_eye_slash.addEventListener('click', function() {
    pswd_eye_slash.classList.remove('show');
    pswd_eye.classList.remove('hide');
    if (pass_word.getAttribute("type") === "text") {
        pass_word.setAttribute("type", "password");
    }
})

const pswd_eye_2 = document.querySelector('#sign_up .user-account .pswd-2 .fa-eye');
pswd_eye_2.addEventListener('click', function() {
    pswd_eye_2.classList.add('hide');
    pswd_eye_slash_2.classList.add('show');
    if (pass_word_2.getAttribute("type") === "password") {
        pass_word_2.setAttribute("type", "text");
    }
})

const pswd_eye_slash_2 = document.querySelector('#sign_up .user-account .pswd-2 .fa-eye-slash');
pswd_eye_slash_2.addEventListener('click', function() {
    pswd_eye_slash_2.classList.remove('show');
    pswd_eye_2.classList.remove('hide');
    if (pass_word_2.getAttribute("type") === "text") {
        pass_word_2.setAttribute("type", "password");
    }
})

/* ===== User-account-2 =====  */
const pass_word_user1 = document.querySelector('#sign_up .user-account-2 #pswd_1');
const pass_word_user2 = document.querySelector('#sign_up .user-account-2 #pswd_2');

const pass_eye = document.querySelector('#sign_up .user-account-2 .pswd-1 .fa-eye');
pass_eye.addEventListener('click', function() {
    pass_eye.classList.add('hide');
    pass_eye_slash.classList.add('show');
    if (pass_word_user1.getAttribute("type") === "password") {
        pass_word_user1.setAttribute("type", "text");
    }
})

const pass_eye_slash = document.querySelector('#sign_up .user-account-2 .pswd-1 .fa-eye-slash');
pass_eye_slash.addEventListener('click', function() {
    pass_eye_slash.classList.remove('show');
    pass_eye.classList.remove('hide');
    if (pass_word_user1.getAttribute("type") === "text") {
        pass_word_user1.setAttribute("type", "password");
    }
})

const pass_eye_2 = document.querySelector('#sign_up .user-account-2 .pswd-2 .fa-eye');
pass_eye_2.addEventListener('click', function() {
    pass_eye_2.classList.add('hide');
    pass_eye_slash_2.classList.add('show');
    if (pass_word_user2.getAttribute("type") === "password") {
        pass_word_user2.setAttribute("type", "text");
    }
})

const pass_eye_slash_2 = document.querySelector('#sign_up .user-account-2 .pswd-2 .fa-eye-slash');
pass_eye_slash_2.addEventListener('click', function() {
    pass_eye_slash_2.classList.remove('show');
    pass_eye_2.classList.remove('hide');
    if (pass_word_user2.getAttribute("type") === "text") {
        pass_word_user2.setAttribute("type", "password");
    }
})

/* ==================================================
# Video
===================================================*/

const video = document.querySelector("video");

function openFullscreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
    }
}