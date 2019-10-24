function initialize() {
	// Check the last darkmode setting
	darkmodeCheck();

	// Activate cards
	activateCards();

	// Catalog all the choice for the random button
	catalogChoices();

	// Run canvas function on repeat
	updateImage();

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

	//Get the month for the holiday images
	getHoliday();
}

if (window.addEventListener) {
  window.addEventListener("load", initialize, false);
} else if (window.attachEvent) {
  window.attachEvent("onLoad", initialize);
} else {
	initialize();
}
