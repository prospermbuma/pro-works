/*===================================================
# Get Current Year
====================================================*/
const copyright_year = document.querySelector('footer .copyright .year');
const today = new Date();
let current_year = today.getFullYear();
copyright_year.innerHTML = current_year;