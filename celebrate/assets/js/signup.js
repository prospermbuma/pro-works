/* ==================================================
# User Password And Eyes
===================================================*/
const pass_word = document.querySelector('#sign_up #pswd_1');
const pass_word_2 = document.querySelector('#sign_up #pswd_2');

const pswd_eye = document.querySelector('#sign_up .pswd-1 .fa-eye');
pswd_eye.addEventListener('click', function () {
    pswd_eye.style.display = 'none';
    pswd_eye_slash.style.display = 'block';
    if (pass_word.getAttribute("type") === "password") {
        pass_word.setAttribute("type", "text");
    }
})

const pswd_eye_slash = document.querySelector('#sign_up .pswd-1 .fa-eye-slash');
pswd_eye_slash.addEventListener('click', function () {
    pswd_eye_slash.style.display = 'none';
    pswd_eye.style.display = 'block';
    if (pass_word.getAttribute("type") === "text") {
        pass_word.setAttribute("type", "password");
    }
})

const pswd_eye_2 = document.querySelector('#sign_up .pswd-2 .fa-eye');
pswd_eye_2.addEventListener('click', function () {
    pswd_eye_2.style.display = 'none';
    pswd_eye_slash_2.style.display = 'block';
    if (pass_word_2.getAttribute("type") === "password") {
        pass_word_2.setAttribute("type", "text");
    }
})

const pswd_eye_slash_2 = document.querySelector('#sign_up .pswd-2 .fa-eye-slash');
pswd_eye_slash_2.addEventListener('click', function () {
    pswd_eye_slash_2.style.display = 'none';
    pswd_eye_2.style.display = 'block';
    if (pass_word_2.getAttribute("type") === "text") {
        pass_word_2.setAttribute("type", "password");
    }
})