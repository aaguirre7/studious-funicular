// Get the popup video player and close button
const popupVideo = document.getElementById('popup-video');
const closeVideo = document.getElementById('close-video');

// Add event listener to the play video button
document.getElementById('play-video').addEventListener('click', () => {
	popupVideo.style.display = 'block';
});

// Add event listener to the close button
closeVideo.addEventListener('click', () => {
	popupVideo.style.display = 'none';
});