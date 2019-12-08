//Simpler JS file compared to initialize.js since text pages don't need as much code
//Author: Nathanael Jacobsma

function initialize() {
	// Check the last darkmode setting
	darkmodeCheck();

	//Remove loading animation
	loadingComplete();
}

if (window.addEventListener) {
	window.addEventListener("load", initialize, false);
} else if (window.attachEvent) {
	window.attachEvent("onLoad", initialize);
} else {
	initialize();
}
