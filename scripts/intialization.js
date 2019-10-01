var devmode = isDevMode();

function initialize() {
	//Update combination count
	applyCount();

	//Run canvas function on repeat after window is loaded
	window.onload = updateImage();
}