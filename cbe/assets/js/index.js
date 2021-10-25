/* ========================================================
# Form
======================================================== */
// Getting form data
const form = document.querySelector('form');
const first_name = form.querySelector('#fname'),
    last_name = form.querySelector('#lname'),
    full_name = form.querySelector('#fullname');
// Preventing form from submitting
form.addEventListener('click', (e) => {
    e.preventDefault();
})

// firstname onkeyup event
first_name.addEventListener('keyup', () => {
    full_name.value = first_name.value;
})

// lastname onkeyup event
last_name.addEventListener('keyup', () => {
    full_name.value = first_name.value + " " + last_name.value;
})

// firstname onkeydown event
first_name.addEventListener('keydown', () => {
    full_name.value = "";
    last_name.value = "";
})

// Populate class based on college
function populate(s1, s2) {
    //Get Ids
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    s2.innerHTML = "";
    // Conditions
    if (s1.value == "choose_college") {
        var optionArray = ["|Choose class"];
    } else if (s1.value == "cbe_dsm") {
        var optionArray = ["|Choose class", "bit1|BIT1", "bit2|BIT2", "dit1|DIT2", "idit2|DIT2"];

    } else if (s1.value == "cbe_dom") {
        var optionArray = ["|Choose class", "dmk1|DMK1", "bmk|BMK1", "bmk2|BMK2"];

    } else if (s1.value == "cbe_mbeya") {
        var optionArray = ["|Choose class", "bsp1|BSP1", "bsp1|BSP2", "dps1|DPS1"];

    } else if (s1.value == "cbe_mwanza") {
        var optionArray = ["|Choose class", "ba1|BA1", "ba2|BA2", "da|DA"];
    }
    // Looping through arrays
    for (var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }
}