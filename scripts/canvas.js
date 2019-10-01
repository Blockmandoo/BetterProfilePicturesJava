var globalColor = "Peridot";
var globalGenre = "Objects";
var globalLogo = "BetterPicture";
var globalLogoColor = "White";
var globalShape = "Square";
var globalStyle = "Blast";
var tempGenre;
var refreshRate = 250; //How often should I update the canvas?
var refreshTime = 5000; //How long should I update the canvas?
var devmode = isDevMode(); //Want to be told what's going on currently in the console?

//Download canvas
function downloadCanvas() {
	if (devMode) {
		console.log("Attempting to save image");
	}
	var canvas = document.querySelector("canvas");
	var imageData = canvas.toDataURL("image/png");
	// create temporary link
	var tmpLink = document.createElement("a");
	tmpLink.download = "Better-Profile-Picture.png"; // set the name of the download file
	tmpLink.href = imageData;

	//Temporarily add link to body and initiate the download
	document.body.appendChild(tmpLink);
	tmpLink.click();
	document.body.removeChild(tmpLink);
}

//Simple set functions
function setLogo(logo) {
	if (devMode) {
		console.log("Setting logo: " + logo);
	}
	globalLogo = logo;
	globalGenre = tempGenre;
	logo = logo.replace("gameofthrones/", ""); //Fix Game of Thrones condition
	logo = logo.replace("mlp/", ""); //Fix Game of Thrones condition

	//Set active Logo display
	var activeLogo = document.querySelector("#logo .active")
	if (activeLogo) {
		activeLogo.className = "";
	}
	document.querySelector("#logo [alt='" + logo + "']").className = "active";

	updateImage();
}

function setColor(color) {
	if (devMode) {
		console.log("Setting color: " + color);
	}
	globalColor = color;

	//Set download button color
	document.querySelector("#buttons").className = color;

	//Set active Color display
	var activeColor = document.querySelector("#color .active")
	if (activeColor) {
		activeColor.className = "";
	}
	document.querySelector("#color [alt='" + color + "']").className = "active";

	updateImage();
}

function setStyle(style) {
	if (devMode) {
		console.log("Setting style: " + style);
	}

	//Set active Style display
	var activeStyle = document.querySelector("#style .active")
	if (activeStyle) {
		activeStyle.className = "";
	}
	document.querySelector("#style [alt='" + style + "']").className = "active";

	globalStyle = style;
	updateImage();
}

function setShape(shape) {
	if (devMode) {
		console.log("Setting shape: " + shape);
	}
	globalShape = shape;

	//Set active Shape display
	var activeShape = document.querySelector("#shape .active")
	if (activeShape) {
		activeShape.className = "";
	}
	document.querySelector("#shape [alt='" + shape + "']").className = "active";

	updateImage();
}

function setLogoColor(color) {
	if (devMode) {
		console.log("Setting logo color: " + color);
	}
	globalLogoColor = color;

	//Set active Color display
	var activeColor = document.querySelector("#logoColor .active")
	if (activeColor) {
		activeColor.className = "";
	}
	document.querySelector("#logoColor [alt='" + color + "']").className = "active";

	updateImage();
}

//Complicated set function
function setGenre(genre) {
	if (devMode) {
		console.log("Setting genre: " + genre);
	}
	//Sets a temp genre
	tempGenre = genre;

	//Set active Genre display
	var activeGenre = document.querySelector("#genre .active")
	if (activeGenre) {
		activeGenre.className = "";
	}
	document.querySelector("#genre [alt='" + tempGenre + "']").className = "active";

	//Target the logo header and un-hide it.
	var logosDiv = document.querySelector("#logo.hidden");
	if (logosDiv) {
		logosDiv.classList.remove("hidden");
	}

	//Hide all the non-hidden genres.
	var logo = document.querySelector("#logo div:not(.hidden)");
	if (logo) {
		logo.classList.add("hidden");
	}

	//Target desired genre div and unhide it.
	var genreDiv = document.querySelector("#logo div." + genre);
	if (genreDiv) {
		genreDiv.classList.remove("hidden");
	}
}

function updateImage() {
	var refresh = setInterval(makeImage, refreshRate);
	setTimeout(function () {
		clearInterval(refresh);
		if (devMode) {
			console.log("Stop!");
		}
	}, refreshTime);
}

//Core function
function makeImage() {
	var canvas = document.querySelector("canvas"); //Grab canvas element.
	var canvasContext = canvas.getContext("2d");

	//Define the logo image.
	var logoImage = new Image();
	logoImage.src = "assets/" + globalGenre + "/" + globalLogo + ".png";

	//Change logo location if color is set to black.
	if (globalLogoColor == "Black") {
		logoImage.src = "assets/darkMode/" + globalGenre + "/" + globalLogo + ".png";
	}

	//Define the logo color image.
	var logoColorImage = new Image();
	logoColorImage.src = "assets/logoColors/" + globalLogoColor + ".png";

	//Define the background image.
	var backgroundImage = new Image();
	backgroundImage.src = "assets/background/" + globalStyle + "-" + globalColor + ".png";

	//Define the shape image.
	var shapeImage = new Image();
	shapeImage.src = "assets/shapes/" + globalShape + ".png";

	//Shrink logo for odd shapes
	var borderOffset;
	switch (globalShape) {
		case "Hexagon":
			borderOffset = 18;
			break;
		case "HexagonLong":
			borderOffset = 18;
			break;
		case "Diamond":
			borderOffset = 38;
			break;
		default:
			borderOffset = 0;
			break;
	}

	//Draw profile picture.
	canvasContext.globalCompositeOperation = "source-in";
	canvasContext.drawImage(logoImage, borderOffset, borderOffset, 256 - 2 * borderOffset, 256 - 2 * borderOffset);
	canvasContext.globalCompositeOperation = "source-atop";
	canvasContext.drawImage(logoColorImage, 0, 0, 256, 256);
	canvasContext.globalCompositeOperation = "destination-over";
	canvasContext.drawImage(backgroundImage, 0, 0, 256, 256);
	canvasContext.globalCompositeOperation = "destination-in";
	canvasContext.drawImage(shapeImage, 0, 0, 256, 256);

}
