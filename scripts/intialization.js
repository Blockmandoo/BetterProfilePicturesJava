//JS file that runs the functions that need to be run on page startup
//Author: Nathanael Jacobsma

function initialize() {
	activateCards();          // Activate cards
	addToggles();             // Setup all toggles
	darkmodeCheck();          // Check the last darkmode setting
	catalogChoices();         // Catalog all the choice for the random button
	updateImage();            // Run canvas function on repeat
	addClicks();              // Add onClick events to image-cards
	intLogoSchemes();         // Setup sudo random options
		intBackgroundSchemes();
	applyHead();              // Add tooltips to all the logos based on their heads
	setBackgroundColor(       // Update button colors
		globalBackgroundColor);
	setIcon();                //Get global variables from url
	getHoliday();             //Get the month for the holiday images
	applyCount();             // Update combination count
	loadingComplete();        //Remove loading animation
}

if (window.addEventListener) {
	window.addEventListener("load", initialize, false);
} else if (window.attachEvent) {
	window.attachEvent("onLoad", initialize);
} else {
	initialize();
}
