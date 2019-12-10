//JS file that handles the canvas image generation
//Author: Nathanael Jacobsma

var globalBackgroundColor = "BurningHorizon",
 		globalBackgroundStyle = "Stars",
		globalGenre = "Objects",
		globalLogo = "Leaf",
		globalLogoColor = "White",
		globalShape = "RoundedSquare",
		tempGenre,
																//1000 = 1 Second
		refreshRate = 250,					//How often should I update the canvas?
		refreshTime = 10000,				//How long should I update the canvas after the page loads?
		secondRefreshTime = 4000;	 //How long should I update the canvas?

//Clone the canvas, and then fade it away
function cloneFadeCanvas() {
	var fadeTime = 1000;
	var canvas = $("canvas:not(.clone)")
	var canvasClone = canvas.clone();

	//Create a clone of the canvas and label it as such
	canvasClone.addClass("clone");
	canvasClone.insertBefore(canvas);

	//Copy the content of the canvas from the original
	var cloneContext = canvasClone[0].getContext('2d');
	cloneContext.drawImage(canvas[0], 0, 0);

	//Fade the canvas clone out of existence
	canvasClone.fadeOut(fadeTime);
	setTimeout(function() {
		canvasClone.remove();
	}, fadeTime);
}

//Download canvas
function downloadCanvas() {
	var canvas = document.querySelector("canvas:not(.clone)");
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

//Core function
function makeImage() {
	var canvas = document.querySelector("canvas:not(.clone)"); //Grab canvas element.
	var canvasContext = canvas.getContext("2d");

	//Define the logo image.
	var logoImage = new Image();
	logoImage.src = "assets/" + globalGenre + "/" + globalLogo + ".png";

	//Change logo location if color is set to black.
	if (globalLogoColor === "Black") {
		logoImage.src = "assets/darkMode/" + globalGenre + "/" + globalLogo + ".png";
	}

	//Define the logo color image.
	var logoColorImage = new Image();
	logoColorImage.src = "assets/logoColors/" + globalLogoColor + ".png";

	//Define the background image.
	var backgroundImage = new Image();
	backgroundImage.src = "assets/background/" + globalBackgroundStyle + "-" + globalBackgroundColor + ".png";

	//Define the shape image.
	var shapeImage = new Image();
	shapeImage.src = "assets/shapes/" + globalShape + ".png";

	//Shrink logo for odd shapes
	var borderOffset;
	switch (globalShape) {
		case "Circle":
			borderOffset = -0.5;
			break;
		case "Decagon":
			borderOffset = 6;
			break;
		case "Diamond":
			borderOffset = 37;
			break;
		case "Hexagon":
		case "HexagonLong":
			borderOffset = 17;
			break;
		case "RoundedHexagon":
		case "RoundedHexagonLong":
			borderOffset = 9;
			break;
		case "Pumpkin":
			borderOffset = 50;
			break;
		case "Nonogon":
			borderOffset = 8;
			break;
		case "Pentagon":
			borderOffset = 24;
			break;
		case "Heptagon":
			borderOffset = 13;
			break;
		default:
			borderOffset = 0;
			break;
	}

	//Draw profile picture.
  drawImage("source-in", logoImage, borderOffset, borderOffset, 256 - 2 * borderOffset, 256 - 2 * borderOffset);
  drawImage("source-atop", logoColorImage, borderOffset, borderOffset, 256 - 2 * borderOffset, 256 - 2 * borderOffset);
  drawImage("destination-over", backgroundImage, 0, 0, 256, 256);
  drawImage("destination-in", shapeImage, 0, 0, 256, 256);
  function drawImage(compOperation, image, x1, y1, x2, y2) {
  	canvasContext.globalCompositeOperation = compOperation;
  	canvasContext.drawImage(image, x1, y1, x2, y2);
  }

}

function setBackgroundColor(color) {
	globalBackgroundColor = color;

	//Set download button color
	document.querySelector("#buttons").className = color;

	//Set active Color display
	var activeColor = document.querySelector("#backgroundColor .active")
	if (activeColor) {
		activeColor.classList.remove("active");
	}
	document.querySelector("#backgroundColor [name='" + color + "']").classList.add("active");

	updateImage();
}

function setBackgroundStyle(style) {
	//Set active Style display
	var activeStyle = document.querySelector("#backgroundStyle .active")
	if (activeStyle) {
		activeStyle.classList.remove("active");
	}
	document.querySelector("#backgroundStyle [name='" + style + "']").classList.add("active");

	globalBackgroundStyle = style;
	updateImage();
}

function setGenre(genre) {
	//Sets a temp genre
	tempGenre = genre;

	//Set active Genre display
	var activeGenre = document.querySelector("#genre .active");
	if (activeGenre) {
		activeGenre.classList.remove("active");
	}
	document.querySelector("#genre [name='" + tempGenre + "']").classList.add("active");

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
	var genreDiv = document.querySelector("#logo div#" + genre);
	if (genreDiv) {
		genreDiv.classList.remove("hidden");
	}
}

function setLogo(logo) {
	//Sepcial case for shows
	logo = logo.replace("-", "/");

	globalLogo = logo;
	globalGenre = tempGenre;

	//Set active Logo display
	var activeLogo = document.querySelector("#logo .active");
	if (activeLogo) {
		activeLogo.classList.remove("active");
	}

	//Sepcial case for shows
	logo = logo.replace("/", "-");

	document.querySelector("#logo #" + globalGenre + " [name='" + logo + "']").classList.add("active");

	updateImage();
}

function setLogoColor(color) {
	globalLogoColor = color;

	//Set active Color display
	var activeColor = $("#logoColor .active")[0];
	if (activeColor) {
		activeColor.classList.remove("active");
	}
	document.querySelector("#logoColor [name='" + color + "']").classList.add("active");

	updateImage();
}

function setShape(shape) {
	globalShape = shape;

	//Set active Shape display
	var activeShape = document.querySelector("#shape .active");
	if (activeShape) {
		activeShape.classList.remove("active");
	}
	document.querySelector("#shape [name='" + shape + "']").classList.add("active");

	updateImage();
}

function updateImage() {
  //Make a clone of the canvas for a fade effect
  cloneFadeCanvas();

  //Update the canvas
	clearInterval(refresh);
	var refresh = setInterval(makeImage, refreshRate);
	setTimeout(function () {
		clearInterval(refresh);
	}, refreshTime);
	refreshTime = secondRefreshTime;
}
