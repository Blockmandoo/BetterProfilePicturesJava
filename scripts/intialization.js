var devmode = isDevMode();

function initialize() {
	// Update combination count
	applyCount();

	// Activate cards
	activateCards();

	// Run canvas function on repeat after window is loaded
	updateImage();

	// Add onClick events to image-cards
	addClicks();
}
