/* ====================================================
# Form
=====================================================*/
const form = document.querySelector('form'),
    eField = form.querySelector('.email'),
    eInput = eField.querySelector('input'),
    pField = form.querySelector('.password'),
    pInput = pField.querySelector('input');

/* === Password Eye Icon  === */
const eye = pField.querySelector('.fa-eye'),
    eyes_slash = pField.querySelector('.fa-eye-slash');

eye.onclick = () => {
    eye.classList.add('hide');
    eyes_slash.classList.add('show');
    if (pInput.getAttribute("type") === "password") {
        pInput.setAttribute("type", "text");
    }
}

eyes_slash.onclick = () => {
    eye.classList.remove('hide');
    eyes_slash.classList.remove('show');
    if (pInput.getAttribute("type") === "text") {
        pInput.setAttribute("type", "password");
    }
}

/* === Form Submittion  === */
form.onsubmit = (e) => {
    /* === Preventing form from submitting === */
    e.preventDefault();

    /* === If Email is empty === */
    if (eInput.value.trim() === "") {
        eField.classList.add('shake', 'error');
    }
    else {
        checkEmail();
        eField.classList.remove('success');
    }

    /* === If Password is empty === */
    if (pInput.value.trim() === "") {
        pField.classList.add('shake', 'error');
        eye.classList.add('hide');
        eyes_slash.classList.add('hide');
    }
    else {
        pField.classList.remove('success');
    }

    /* === Remove shake after 500ms === */
    setTimeout(() => {
        eField.classList.remove('shake');
        pField.classList.remove('shake');
    }, 500)

    /* === Working on input keyup  === */
    eInput.onkeyup = () => {
        checkEmail();
    }


    /* === Check email function  === */
    function checkEmail() {
        /* === Pattern to validate email  === */
        let pattern = /^[^]+@[^ ]+\.[a-z]{2,3}$/;
        /* === If pattern not matched with user value entered  === */
        if (!eInput.value.trim().match(pattern)) {
            eField.classList.add('error');
            eField.classList.remove('success');
            let errorTxt = eField.querySelector('.error-txt');
            if (eInput.value.trim() != "") {
                errorTxt.innerText = "Enter valid email address";
            }
            else {
                errorTxt.innerText = "Email can't be blank";
                eField.classList.remove('success');
            }
        }
        else {
            eField.classList.remove('error');
            eField.classList.add('success');
        }
    }

    pInput.onkeyup = () => {
        /* === If password is empty  === */
        if (pInput.value.trim() === "") {
            pField.classList.add('error');
            pField.classList.remove('success');
            eye.classList.add('hide');
            eyes_slash.classList.hide('hide');
        }
        else {
            pField.classList.remove('error');
            pField.classList.add('success');
            eye.classList.add('hide');
            eyes_slash.classList.hide('hide');
        }
    }
    /* === When user filled up proper details  === */
    /* === If error class not contains in eField and pField then user has entered proper details  === */
    if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
        window.location.href = "#";
        console.log("Form Submitted");
        pInput.value = "";
        eInput.value = "";
    }
}