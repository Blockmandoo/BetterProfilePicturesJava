function initialize() {
	// Activate cards
	activateCards();

	// Check the last darkmode setting
	darkmodeCheck();

	// Run canvas function on repeat
	updateImage();

	// Catalog all the choice for the random button
	catalogChoices();

	// Add onClick events to image-cards
	addClicks();

	// Setup sudo random options
	intLogoSchemes();
	intBackgroundSchemes();

	// Add tooltips to all the logos based on  their heads
	applyHead();

	// Update combination count
	applyCount();

	// Update button colors
	setBackgroundColor(globalBackgroundColor);

	//Get global variables from url
	setIcon();
}

initialize();
