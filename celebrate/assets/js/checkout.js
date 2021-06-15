/* ==================================================
# User Password And Eyes
===================================================*/
const pass_word = document.querySelector('#sign_up #pswd_0');
const pass_word_2 = document.querySelector('#sign_up #pswd_1');
const pass_word_3 = document.querySelector('#sign_up #pswd_2');

const pswd_eye = document.querySelector('#sign_up .pswd-0 .fa-eye');
pswd_eye.addEventListener('click', function () {
    pswd_eye.classList.add('hide');
    pswd_eye_slash.classList.add('show');
    if (pass_word.getAttribute("type") === "password") {
        pass_word.setAttribute("type", "text");
    }
})

const pswd_eye_slash = document.querySelector('#sign_up .pswd-0 .fa-eye-slash');
pswd_eye_slash.addEventListener('click', function () {
    pswd_eye_slash.classList.remove('show');
    pswd_eye.classList.remove('hide');
    if (pass_word.getAttribute("type") === "text") {
        pass_word.setAttribute("type", "password");
    }
})

const pswd_eye_2 = document.querySelector('#sign_up .pswd-1 .fa-eye');
pswd_eye_2.addEventListener('click', function () {
    pswd_eye_2.classList.add('hide');
    pswd_eye_slash_2.classList.add('show');
    if (pass_word_2.getAttribute("type") === "password") {
        pass_word_2.setAttribute("type", "text");
    }
})

const pswd_eye_slash_2 = document.querySelector('#sign_up .pswd-1 .fa-eye-slash');
pswd_eye_slash_2.addEventListener('click', function () {
    pswd_eye_slash_2.classList.remove('show');
    pswd_eye_2.classList.remove('hide');
    if (pass_word_2.getAttribute("type") === "text") {
        pass_word_2.setAttribute("type", "password");
    }
})
const pswd_eye_3 = document.querySelector('#sign_up .pswd-2 .fa-eye');
pswd_eye_3.addEventListener('click', function () {
    pswd_eye_3.classList.add('hide');
    pswd_eye_slash_3.classList.add('show');
    if (pass_word_3.getAttribute("type") === "password") {
        pass_word_3.setAttribute("type", "text");
    }
})

const pswd_eye_slash_3 = document.querySelector('#sign_up .pswd-2 .fa-eye-slash');
pswd_eye_slash_3.addEventListener('click', function () {
    pswd_eye_slash_3.classList.remove('show');
    pswd_eye_3.classList.remove('hide');
    if (pass_word_3.getAttribute("type") === "text") {
        pass_word_3.setAttribute("type", "password");
    }
})