/* ==================================================
# Form Submission
===================================================*/
const form = document.querySelector('form'),
    statusTxt = form.querySelector('.submit-button-area span');

form.onsubmit = (e) => {
    e.preventDefault(); //Prevent from submitting
    statusTxt.style.color = '#0D6EFD';
    statusTxt.style.display = 'block';

    // Creating new xml object
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'message.php', true); // Sending post request to a message.php file
    xhr.onload = () => { // once ajax loaded
        if (xhr.readyState == 4 && status == 200) { // if ajax response status is 200 and ready status is 4 means there is no any error
            let response = xhr.response; // Storing ajax response in a variable response
            if (response.indexOf("Email and message filed is required") != -1 || response.indexOf("Enter a valid email address") != -1) {
                statusTxt.style.color = 'red';
            }
            else {
                form.reset();
                setTimeout(() => {
                    statusTxt.style.display = 'none';
                }, 3000) // Hide the text after 3 seconds if the message is sent
            }
            statusTxt.innerText = response;
            console.log(response);
        }
    }
    let formData = new FormData(form); //Creating a new FormData object. This object is used to send form data
    xhr.send(formData); //Sending form data
}