var devmode = isDevMode();

function genreClick(imageCard) {
	var name = imageCard.getAttribute("activate");
	if (window.addEventListener) {
		window.addEventListener("click", function () {
			setGenre(name);
		}, false);
	} else if (TOCEntry.attachEvent) {
		window.attachEvent("onClick", function () {
			setGenre(name);
		});
	}
}
