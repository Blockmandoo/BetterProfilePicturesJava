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

	// Add tooltips to all the logos based on  their heads
	applyHead();

	// Update combination count
	applyCount();

	// Update button colors
	setBackgroundColor(globalBackgroundColor);

	//Get global variables from url
	setIcon();
}

if (window.addEventListener) {
  window.addEventListener("load", initialize, false);
} else if (window.attachEvent) {
  window.attachEvent("onLoad", initialize);
}
