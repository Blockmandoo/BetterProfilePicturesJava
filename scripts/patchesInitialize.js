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
