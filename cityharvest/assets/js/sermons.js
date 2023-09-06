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

/* =====================================================
# YouTube Data API - Getting Youtube Videos Playlist
===================================================== */
// YouTube Data API Key & Playlist ID.
const API_KEY = 'AIzaSyDeHAzKbI8wQ3hwhzhf_7tMnmkzZCQYliY';
const PLAYLIST_ID = 'UUQLLAyIDCHSstiXWt5w2dpQ';
const MAX_RESULTS = 6; // Number of videos per page.
let nextPageToken = '';
let prevPageToken = '';
// let pageTokens = []; // Stack to store page tokens
let currentPage = 1;
let totalVideos = 0;

// Load the YouTube Data API client library.
gapi.load('client', start);

function start() {
   gapi.client.init({
      apiKey: API_KEY,
   }).then(() => {
      return gapi.client.request({
         path: `https://www.googleapis.com/youtube/v3/playlistItems`,
         params: {
            part: 'snippet',
            playlistId: PLAYLIST_ID,
            maxResults: MAX_RESULTS,
            pageToken: nextPageToken,
            // pageToken: pageTokens.length > 0 ? pageTokens[pageTokens.length - 1] : '', // Use the top page token
            order: 'date', // Order by date
            sort: 'asc', // Sort in ascending order (oldest first)
            // For descending order (newest first), you can use 'desc'.
            // The default order is 'desc'.
            // sort: 'desc',
         },
      });
   }).then(response => {
      const videoList = document.getElementById('video-list');
      const videos = response.result.items;

      if (videos.length === 0) {
         videoList.innerHTML = 'No videos found in the playlist.';
         return;
      }

      totalVideos = response.result.pageInfo.totalResults;
      nextPageToken = response.result.nextPageToken;
      prevPageToken = response.result.prevPageToken;

      videos.forEach(video => {
         const title = video.snippet.title;
         const videoId = video.snippet.resourceId.videoId;

         // Create a div to display the video.
         const videoDiv = document.createElement('div');
         videoDiv.classList.add('video-item'); // Add video-item class
         videoDiv.setAttribute('data-aos', 'fade-up');// Set AOS attributes
         videoDiv.setAttribute('data-aos-delay', '100');// Set AOS attributes
         videoDiv.innerHTML = `
          <iframe src="https://www.youtube.com/embed/${videoId}?controls=0&showinfo=0" frameborder="0" allowfullscreen>
          </iframe>
          <h2 class="video-title">${title}</h2>
        `;

         videoList.appendChild(videoDiv);
      });

      updatePageDisplay();
      updatePagination();
   });
}

function updatePageDisplay() {
   const totalPages = Math.ceil(totalVideos / MAX_RESULTS);
   const pageDisplay = document.getElementById('page-number');
   pageDisplay.innerText = `Page ${currentPage} of ${totalPages}`;
}

function updatePagination() {
   const totalPages = Math.ceil(totalVideos / MAX_RESULTS);
   const pagination = document.getElementById('pagination');
   pagination.innerHTML = '';

   if (currentPage > 1) {
      const prevButton = createPaginationButton('Prev', currentPage - 1, 'prev');
      pagination.appendChild(prevButton);
   }
   
   // for (let i = 1; i <= 3; i++) {
   //    const pageButton = createPaginationButton(i, i, 'pagination-button');
   //    pagination.appendChild(pageButton);
   // }

   if (currentPage < totalPages) {
      const nextButton = createPaginationButton('Next', currentPage + 1, 'next');
      pagination.appendChild(nextButton);
   }
}

function createPaginationButton(label, page, className = '') {
   const button = document.createElement('div');
   button.className = `pagination-button ${className}`;
   button.innerText = label;
   button.addEventListener('click', () => goToPage(page));
   return button;
}

// function goToPage(page) {
//    if (page === 'prev' && pageTokens.length > 1) {
//       pageTokens.pop(); // Remove the current page token
//       currentPage--;
//    } else if (page === 'next') {
//       pageTokens.push(pageTokens[pageTokens.length - 1]); // Push the current page token
//       currentPage++;
//    }
//    else {
//       // A specific page number was clicked
//       pageTokens.push(pageTokens[pageTokens.length - 1]); // Push the current page token
//       currentPage = page;
//    }

function goToPage(page) {
   currentPage = page;
   const startIndex = (currentPage - 1) * MAX_RESULTS;
   const endIndex = startIndex + MAX_RESULTS;

   // const startIndex = (currentPage - 1) * MAX_RESULTS;
   // const endIndex = startIndex + MAX_RESULTS;

   const videoList = document.getElementById('video-list');
   videoList.innerHTML = '';

   if (page === 1) {
      nextPageToken = ''; // Reset nextPageToken when going to the first page
   }

   // if (page === Math.ceil(totalVideos / MAX_RESULTS)) {
   //    //If on the last page, do not set nextPageToken
   // } else {
   //    nextPageToken = ''; // Reset nextPageToken when going to any other page
   // }

   if (page > 1) {
      prevPageToken = ''; // Reset prevPageToken when not on the first page
   }

   start(); // Fetch and display videos for the new page
}

// Initial load
start();

