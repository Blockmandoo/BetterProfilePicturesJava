function initialize() {
	// Activate cards
	activateCards();

	// Run canvas function on repeat
	updateImage();

	// Catalog all the choice for the random button
	catalogChoices();

	// Add onClick events to image-cards
	addClicks();

	// Setup sudo random options
	intLogoSchemes();
	intBackgroundSchemes();

	// Update combination count
	applyCount();
}

initialize();
