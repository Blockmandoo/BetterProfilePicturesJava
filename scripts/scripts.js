var backgroundColorNames = [];
var backgroundStyleNames = [];
var logoNames = [];
var logoColorNames = [];
var shapeNames = [];
var devMode = false;
function isDevMode() {
	return devMode;
}

function darkmodeToggle() {
	var body = document.querySelector("body");
	var toggle = document.querySelector("label[for='darkmode']");
	if (body.classList[0] == "darkMode") {
		body.className = "lightMode";
		toggle.className = "checked";
		if (devMode) {
			console.log("Setting to light mode.");
		}
	} else {
		body.className = "darkMode";
		toggle.className = "";
		if (devMode) {
			console.log("Setting to dark mode.");
		}
	}
}

//Count all the image-card elements in a div
function choiceCount(catagory) {
	var images = document.querySelectorAll("div#" + catagory + " image-card");
	return images.length;
}

//Activate active cards
function activateCards() {
	document.querySelector("#backgroundColor [name='" + globalBackgroundColor + "']").className = "active";
	document.querySelector("#logo [name='" + globalLogo + "']").className = "active";
	document.querySelector("#logoColor [name='" + globalLogoColor + "']").className = "active";
	document.querySelector("#shape [name='" + globalShape + "']").className = "active";
	document.querySelector("#backgroundStyle [name='" + globalBackgroundStyle + "']").className = "active";
}

//Code injected from the interwebs because it makes no sense but works
function numberWithCommas(number) {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//Multiply all the image-card counts together for a total
function multiplyAll() {
	var count = choiceCount("logo") * choiceCount("logoColor") * choiceCount("backgroundColor") * choiceCount("backgroundStyle") * choiceCount("shape");
	return numberWithCommas(count);
}

//Apply the total to the combination span
function applyCount() {
	var countElement = document.querySelector(".combinations");
	countElement.textContent = multiplyAll();
}

//Change description
function setDescription(head, flavor) {
	document.getElementById("header").textContent = head;
	document.getElementById("flavorText").innerHTML = flavor;
}

//intialization to get all the possible options
function catalogChoices() {
	backgroundColorNames = [];
	backgroundStyleNames = [];
	logoNames = [];
	logoColorNames = [];
	shapeNames = [];
	var backgroundColors = document.querySelectorAll("#backgroundColor image-card");
	var backgroundStyles = document.querySelectorAll("#backgroundStyle image-card");
	var logos = document.querySelectorAll("#logo image-card");
	var logoColors = document.querySelectorAll("#logoColor image-card");
	var shapes = document.querySelectorAll("#shape image-card");
	for (var i = 0; i < backgroundColors.length; i++) {
		backgroundColorNames.push(backgroundColors[i].getAttribute("name"));
	}
	for (var i = 0; i < backgroundStyles.length; i++) {
		backgroundStyleNames.push(backgroundStyles[i].getAttribute("name"));
	}
	for (var i = 0; i < logos.length; i++) {
		logoNames.push(logos[i].getAttribute("name"));
	}
	for (var i = 0; i < logoColors.length; i++) {
		logoColorNames.push(logoColors[i].getAttribute("name"));
	}
	for (var i = 0; i < shapes.length; i++) {
		shapeNames.push(shapes[i].getAttribute("name"));
	}
}

//Random icon lock switch
function swapLock(button) {
	if (button.className == "lock") {
		button.className = "unlock";
	} else {
		button.className = "lock";
	}
}

//Random icon generator
function randomIcon() {
	//Get random values for each choice
	var backgroundColorIndex = Math.floor(Math.random() * (backgroundColorNames.length - 1));
	var backgroundStyleIndex = Math.floor(Math.random() * (backgroundStyleNames.length - 1));
	var logoIndex = Math.floor(Math.random() * (logoNames.length - 1));
	var logoColorIndex = Math.floor(Math.random() * (logoColorNames.length - 1));
	var shapeIndex = Math.floor(Math.random() * (shapeNames.length - 1));

	//Genre calculations
	var logoName = logoNames[logoIndex];
	var logoElement = document.querySelector("image-card[name="+logoName+"]");
	var genre = logoElement.parentNode.getAttribute("id");

	//Setting the icon
	if (document.querySelector("#backgroundColor .unlock")) {
		setBackgroundColor(backgroundColorNames[backgroundColorIndex]);
	}
	if (document.querySelector("#backgroundStyle .unlock")) {
		setBackgroundStyle(backgroundStyleNames[backgroundStyleIndex]);
	}
	if (document.querySelector("#logo .unlock")) {
		setGenre(genre);
		setLogo(logoNames[logoIndex]);
	}
	if (document.querySelector("#logoColor .unlock")) {
		setLogoColor(logoColorNames[logoColorIndex]);
	}
	if (document.querySelector("#shape .unlock")) {
		setShape(shapeNames[shapeIndex]);
	}
}

function randomishIcon() {
	//Get random values for each choice
	// var backgroundColorIndex = Math.floor(Math.random() * backgroundColorNames.length - 1));
	var backgroundColorIndex;
	var backgroundStyleIndex = Math.floor(Math.random() * (backgroundStyleNames.length - 1));
	var logoIndex = Math.floor(Math.random() * (logoNames.length - 1));
	// var logoColorIndex = Math.floor(Math.random() * logoColorNames.length - 1));
	var logoColorIndex;
	var shapeIndex = Math.floor(Math.random() * (shapeNames.length - 1));

	if (document.querySelector("#backgroundColor .lock")) {
		//Background First
		var backgroundColor = document.querySelector("#backgroundColor .active").getAttribute("name");
		for (var i = 0; i < backgroundSchemes.length; i++) {
			if (backgroundSchemes[i].backgroundColor = backgroundColor) {
				backgroundColorIndex = i;
				break;
			}
		}

	} else {
		//Logo First
		var library = logoSchemes[Math.floor(Math.random() * (logoSchemes.length - 1))];
	}

	//Genre calculations
	var logoName = logoNames[logoIndex];
	var logoElement = document.querySelector("image-card[name="+logoName+"]");
	var genre = logoElement.parentNode.getAttribute("id");

	//Setting the icon
	if (document.querySelector("#backgroundColor .unlock")) {
		setBackgroundColor(backgroundColorNames[backgroundStyleIndex]);
	}
	if (document.querySelector("#backgroundStyle .unlock")) {
		setBackgroundStyle(backgroundStyleNames[backgroundStyleIndex]);
	}
	if (document.querySelector("#logo .unlock")) {
		setGenre(genre);
		setLogo(logoNames[logoIndex]);
	}
	if (document.querySelector("#logoColor .unlock")) {
		setLogoColor(logoColorNames[logoColorIndex]);
	}
	if (document.querySelector("#shape .unlock")) {
		setShape(shapeNames[shapeIndex]);
	}
}
