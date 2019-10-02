var devmode = isDevMode();

function addClicks() {
	backgroundColorClicks();
	backgroundStyleClicks();
	genreClicks();
	logoClicks();
	logoColorClicks();
	shapeClicks();
}

function backgroundStyleClicks() {
	var elements = document.querySelectorAll("#backgroundStyle image-card");
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].addEventListener) {
			elements[i].addEventListener("click", function () {
				var name = this.getAttribute("name");
				setBackgroundStyle(name);
			}, false);
		} else if (elements[i].attachEvent) {
			elements[i].attachEvent("onClick", function () {
				var name = this.getAttribute("name");
				setBackgroundStyle(name);
			});
		}
	}
}

function backgroundColorClicks() {
	var elements = document.querySelectorAll("#backgroundColor image-card");
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].addEventListener) {
			elements[i].addEventListener("click", function () {
				var name = this.getAttribute("name");
				setBackgroundColor(name);
			}, false);
		} else if (elements[i].attachEvent) {
			elements[i].attachEvent("onClick", function () {
				var name = this.getAttribute("name");
				setBackgroundColor(name);
			});
		}
	}
}

function genreClicks() {
	var elements = document.querySelectorAll("#genre image-card");
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].addEventListener) {
			elements[i].addEventListener("click", function () {
				var name = this.getAttribute("name");
				setGenre(name);
			}, false);
		} else if (elements[i].attachEvent) {
			elements[i].attachEvent("onClick", function () {
				var name = this.getAttribute("name");
				setGenre(name);
			});
		}
	}
}

function logoClicks() {
	var elements = document.querySelectorAll("#logo image-card");
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].addEventListener) {
			elements[i].addEventListener("click", function () {
				var name = this.getAttribute("name");
				setLogo(name);
			}, false);
		} else if (elements[i].attachEvent) {
			elements[i].attachEvent("onClick", function () {
				var name = this.getAttribute("name");
				setLogo(name);
			});
		}
	}
}

function logoColorClicks() {
	var elements = document.querySelectorAll("#logoColor image-card");
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].addEventListener) {
			elements[i].addEventListener("click", function () {
				var name = this.getAttribute("name");
				setLogoColor(name);
			}, false);
		} else if (elements[i].attachEvent) {
			elements[i].attachEvent("onClick", function () {
				var name = this.getAttribute("name");
				setLogoColor(name);
			});
		}
	}
}

function shapeClicks() {
	var elements = document.querySelectorAll("#shape image-card");
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].addEventListener) {
			elements[i].addEventListener("click", function () {
				var name = this.getAttribute("name");
				setShape(name);
			}, false);
		} else if (elements[i].attachEvent) {
			elements[i].attachEvent("onClick", function () {
				var name = this.getAttribute("name");
				setShape(name);
			});
		}
	}
}
