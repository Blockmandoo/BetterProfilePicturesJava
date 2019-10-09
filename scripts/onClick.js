function addClicks() {
	backgroundColorClicks();
	backgroundStyleClicks();
	genreClicks();
	logoClicks();
	logoColorClicks();
	shapeClicks();
	downloadLink();
	randomLink();
	randomishLink();
	lockButton();
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

function downloadLink() {
	var elements = document.querySelectorAll("#download, #canvasLink");
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].addEventListener) {
			elements[i].addEventListener("click", function () {
				downloadCanvas();
			}, false);
		} else if (elements[i].attachEvent) {
			elements[i].attachEvent("onClick", function () {
				downloadCanvas();
			});
		}
	}
}

function randomLink() {
	var element = document.querySelector("#random");
	if (element.addEventListener) {
		element.addEventListener("click", function () {
			randomIcon();
		}, false);
	} else if (element.attachEvent) {
		element.attachEvent("onClick", function () {
			randomIcon();
		});
	}
}

function randomishLink() {
	var element = document.querySelector("#sudorandom");
	if (element.addEventListener) {
		element.addEventListener("click", function () {
			randomishIcon();
		}, false);
	} else if (element.attachEvent) {
		element.attachEvent("onClick", function () {
			randomishIcon();
		});
	}
}

function lockButton() {
	var elements = document.querySelectorAll("button.lock, button.unlock");
	for (var i = 0; i < elements.length; i++) {
		if (elements[i].addEventListener) {
			elements[i].addEventListener("click", function () {
				swapLock(this);
			}, false);
		} else if (elements[i].attachEvent) {
			elements[i].attachEvent("onClick", function () {
				swapLock(this);
			});
		}
	}
}
