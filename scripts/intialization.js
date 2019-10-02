var devmode = isDevMode();

function initialize() {
	// Update combination count
	applyCount();

	// Activate cards
	activateCards();

	// Run canvas function on repeat
	updateImage();

	//Catalog all the choice for the random button
	catalogChoices();

	// Add onClick events to image-cards
	addClicks();
}
