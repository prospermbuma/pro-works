/* =====================================================
# Navigation
===================================================== */
const navbar = document.querySelector(".navbar");
const navbar_menu = document.querySelector(".navbar-menu");
const nav_brand = document.querySelector(".navbar #logo");
const nav_link_change = document.querySelectorAll(".navbar .change-Color");
const nav_btn_login = document.querySelector(".login");
const nav_btn_give = document.querySelector(".give");
// Define the media query
const mediaQuery = window.matchMedia('(max-width: 768px)');

window.addEventListener('scroll', () => {
   if (window.scrollY > 50) {
      navbar.style.background = "hsla(0, 0%, 100%, .9)";
      navbar.style.boxShadow = "0 3px 10px rgba(0, 0, 0, 0.1)";
      navbar.style.backdropFilter = "blur(10px)";
      navbar.style.top = "0";
      // Check if the media query is true
      if (mediaQuery.matches) {
         navbar_menu.style.background = "#f8f9fa";
         navbar_menu.style.backdropFilter = "blur(0px)";
      }
      nav_brand.src = "../assets/img/logo/logo3.png";
      nav_link_change.forEach(link => {
         link.style.color = "#000";
         link.addEventListener("mouseover", () => {
            link.style.color = "#419203";
         })
         link.addEventListener("mouseout", () => {
            link.style.color = "#000";
         })
      });
      // Login Button
      // nav_btn_login.style.color = "#fff";
      nav_btn_login.addEventListener("mouseover", () => {
         nav_btn_login.style.color = "#419203";
      })
      nav_btn_login.addEventListener("mouseout", () => {
         nav_btn_login.style.color = "#fff";
      })
      // Give button
      nav_btn_give.style.color = "#419203";
      nav_btn_give.addEventListener("mouseover", () => {
         nav_btn_give.style.color = "#fff";
      })
      nav_btn_give.addEventListener("mouseout", () => {
         nav_btn_give.style.color = "#419203";
      })
   }
   else {
      navbar.style.background = "transparent";
      navbar.style.boxShadow = "none";
      navbar.style.backdropFilter = "none";
      navbar.style.top = "22px";
      // Check if the media query is true
      if (mediaQuery.matches) {
         navbar_menu.style.background = "hsla(120, 1%, 19%, 0.9)";
         navbar_menu.style.backdropFilter = "blur(10px)";
      }
      nav_brand.src = "../assets/img/logo/logo2.png";
      nav_link_change.forEach(link => {
         link.style.color = "#f8f9fa";
         link.addEventListener("mouseover", () => {
            link.style.color = "#419203";
         })
         link.addEventListener("mouseout", () => {
            link.style.color = "#fff";
         })
      });

      // Login Button
      nav_btn_login.style.color = "#fff";
      nav_btn_login.addEventListener("mouseover", () => {
         nav_btn_login.style.color = "#fff";
      })
      nav_btn_login.addEventListener("mouseout", () => {
         nav_btn_login.style.color = "#fff";
      })
      // Give button
      nav_btn_give.style.color = "#fff";
      nav_btn_give.addEventListener("mouseover", () => {
         nav_btn_give.style.color = "#fff";
      })
      nav_btn_give.addEventListener("mouseout", () => {
         nav_btn_give.style.color = "#fff";
      })
   }
});
