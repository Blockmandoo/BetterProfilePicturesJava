var globalBackgroundColor = "BurningHorizon",
 		globalBackgroundStyle = "Stars",
		globalGenre = "Objects",
		globalLogo = "Leaf",
		globalLogoColor = "White",
		globalShape = "RoundedSquare",
		tempGenre,
                                //1000 = 1 Second
		refreshRate = 250,          //How often should I update the canvas?
    refreshTime = 10000,        //How long should I update the canvas after the page loads?
		secondRefreshTime = 3000;   //How long should I update the canvas?

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

//Core function
function makeImage() {
	var canvas = document.querySelector("canvas"); //Grab canvas element.
	var canvasContext = canvas.getContext("2d");
	if (devMode) {
		console.log("Refresh image");
	}

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
	backgroundImage.src = "assets/background/" + globalBackgroundStyle + "-" + globalBackgroundColor + ".png";

	//Define the shape image.
	var shapeImage = new Image();
	shapeImage.src = "assets/shapes/" + globalShape + ".png";

	//Shrink logo for odd shapes
	var borderOffset;
	switch (globalShape) {
    case "Circle":
      borderOffset = -1;
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
		case "Nonogon":
			borderOffset = 8;
			break;
		case "Pentagon":
			borderOffset = 24;
			break;
		case "Septagon":
			borderOffset = 13;
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

function setBackgroundColor(color) {
	if (devMode) {
		console.log("Setting background color: " + color);
	}
	globalBackgroundColor = color;

	//Set download button color
	document.querySelector("#buttons").className = color;

	//Set active Color display
	var activeColor = document.querySelector("#backgroundColor .active")
	if (activeColor) {
		activeColor.className = "";
	}
	document.querySelector("#backgroundColor [name='" + color + "']").className = "active";

	updateImage();
}

function setBackgroundStyle(style) {
	if (devMode) {
		console.log("Setting background style: " + style);
	}

	//Set active Style display
	var activeStyle = document.querySelector("#backgroundStyle .active")
	if (activeStyle) {
		activeStyle.className = "";
	}
	document.querySelector("#backgroundStyle [name='" + style + "']").className = "active";

	globalBackgroundStyle = style;
	updateImage();
}

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
	document.querySelector("#genre [name='" + tempGenre + "']").className = "active";

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
	if (devMode) {
		console.log("Setting logo: " + logo);
	}

	//Sepcial case for shows
	logo = logo.replace("-", "/");

	globalLogo = logo;
	globalGenre = tempGenre;

	//Set active Logo display
	var activeLogo = document.querySelector("#logo .active")
	if (activeLogo) {
		activeLogo.className = "";
	}

	//Sepcial case for shows
	logo = logo.replace("/", "-");

	document.querySelector("#logo [name='" + logo + "']").className = "active";

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
	document.querySelector("#logoColor [name='" + color + "']").className = "active";

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
	document.querySelector("#shape [name='" + shape + "']").className = "active";

	updateImage();
}

function updateImage() {
  clearInterval(refresh);
	var refresh = setInterval(makeImage, refreshRate);
	setTimeout(function () {
		clearInterval(refresh);
		if (devMode) {
			console.log("Stop!");
		}
	}, refreshTime);
  refreshTime = secondRefreshTime;
}
