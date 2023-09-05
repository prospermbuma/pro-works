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
// YouTube Data API Key.
const API_KEY = 'AIzaSyDeHAzKbI8wQ3hwhzhf_7tMnmkzZCQYliY';
const PLAYLIST_ID = 'UUQLLAyIDCHSstiXWt5w2dpQ';
const MAX_RESULTS = 3; // Number of videos per page.
let nextPageToken = '';

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
            },
        });
    }).then(response => {
        const videoList = document.getElementById('video-list');
        const pagination = document.getElementById('pagination');
        const videos = response.result.items;

        if (videos.length === 0) {
            videoList.innerHTML = 'No videos found in the playlist.';
            return;
        }

        nextPageToken = response.result.nextPageToken;

        videos.forEach(video => {
            const title = video.snippet.title;
            const videoId = video.snippet.resourceId.videoId;
            const thumbnailUrl = video.snippet.thumbnails.default.url;
            // <iframe src="https://www.youtube.com/embed/${videoId}?controls=0&showinfo=0"  frameborder="0" allowfullscreen></iframe>
            // Create a div to display the video.
            const videoDiv = document.createElement('div');
            videoDiv.classList.add('video-item'); // Add video-item class
            videoDiv.setAttribute('data-aos', 'fade-up');// Set AOS attributes
            videoDiv.setAttribute('data-aos-delay', '100');// Set AOS attributes
            videoDiv.innerHTML = `
        <div class="video-player" data-video-id="${videoId}"></div>
        <h2 class="video-title">${title}</h2>
      `;

            videoList.appendChild(videoDiv);
        });

        // Load YouTube player for each video
        const videoPlayers = document.querySelectorAll('.video-player');
        videoPlayers.forEach(player => {
            const videoId = player.getAttribute('data-video-id');
            createYouTubePlayer(videoId, player);
        });

        function createYouTubePlayer(videoId, container) {
            const player = new YT.Player(container, {
                videoId: videoId,
                playerVars: {
                    modestbranding: 1, // Hide YouTube logo
                    controls: 0, // Hide player controls
                    showinfo: 0, // Hide video title and uploader info
                    rel: 0 // Disable related videos at the end
                },
            });
        }

        // Add pagination buttons.
        if (nextPageToken) {
            const nextPageButton = document.createElement('button');
            nextPageButton.innerText = 'Next Page';
            nextPageButton.addEventListener('click', loadNextPage);
            pagination.appendChild(nextPageButton);
        }
    });
}

function loadNextPage() {
    start();
}