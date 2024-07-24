// Get the popup picture viewer and close link
const popupPicture = document.getElementById('popup-picture');
const closePicture = document.getElementById('close-picture');

// Add event listener to the view picture link
document.getElementById('view-picture').addEventListener('click', (e) => {
	e.preventDefault();
	popupPicture.style.display = 'block';
});

// Add event listener to the close link
closePicture.addEventListener('click', (e) => {
	e.preventDefault();
	popupPicture.style.display = 'none';
});