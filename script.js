function playVideo() {
    // Get the input value
    var videoNumber = document.getElementById("videoNumber").value;

    // Get the selected media type
    var mediaType = document.getElementById("mediaType").value;

    // Construct the base URL based on the media type
    var baseUrl = "https://vidsrc.me/embed/";
    var mediaUrl = (mediaType === "movies") ? "movie" : "tv";

    // Create the iframe element with the updated video number and media type
    var iframe = document.createElement("iframe");
    iframe.src = baseUrl + mediaUrl + "?tmdb=" + videoNumber;

    // If TV show, append season and episode parameters
    if (mediaType === "tv") {
        var season = document.getElementById("season").value;
        var episode = document.getElementById("episode").value;
        iframe.src += "&season=" + season + "&episode=" + episode;
    }

    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.frameBorder = "0";
    iframe.referrerPolicy = "origin";
    iframe.allowFullscreen = true;

    // Clear previous video player content
    var videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.innerHTML = "";

    // Append the new iframe to the video player container
    videoPlayer.appendChild(iframe);
}

// Show/hide TV options based on the selected media type
document.getElementById("mediaType").addEventListener("change", function () {
    var tvOptions = document.getElementById("tvOptions");
    if (this.value === "tv") {
        tvOptions.style.display = "block";
    } else {
        tvOptions.style.display = "none";
    }
});

const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');

const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;
const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);

function matrix() {
  ctx.fillStyle = '#0001';
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = '#0f0';
  ctx.font = '15pt monospace';

  ypos.forEach((y, ind) => {
    const text = String.fromCharCode(Math.random() * 128);
    const x = ind * 20;
    ctx.fillText(text, x, y);
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;else
    ypos[ind] = y + 20;
  });
}

setInterval(matrix, 50);
