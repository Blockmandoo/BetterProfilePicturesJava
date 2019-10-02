var devmode = isDevMode();

function addClicks() {
	genreClicks();
}

function genreClicks() {
	var genres = document.querySelectorAll("#genre image-card");
	for (var i = 0; i < genres.length; i++) {
		if (genres[i].addEventListener) {
			genres[i].addEventListener("click", function () {
				var name = this.getAttribute("name");
				setGenre(name);
			}, false);
		} else if (TOCEntry.attachEvent) {
			genres[i].attachEvent("onClick", function () {
				var name = this.getAttribute("name");
				setGenre(name);
			});
		}
	}
}
