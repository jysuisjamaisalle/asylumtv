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