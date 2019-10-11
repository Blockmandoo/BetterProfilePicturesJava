var backgroundColorNames = [],
		backgroundStyleNames = [],
		logoNames = [],
		logoColorNames = [],
		shapeNames = [],
		devMode = false;

//Activate active cards
function activateCards() {
	document.querySelector("#backgroundColor [name='" + globalBackgroundColor + "']").className = "active";
	document.querySelector("#logo [name='" + globalLogo + "']").className = "active";
	document.querySelector("#logoColor [name='" + globalLogoColor + "']").className = "active";
	document.querySelector("#shape [name='" + globalShape + "']").className = "active";
	document.querySelector("#backgroundStyle [name='" + globalBackgroundStyle + "']").className = "active";
}

//Apply the total to the combination span
function applyCount() {
	//Code injected from the interwebs because it makes no sense but works
	function numberWithCommas(number) {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	//Count all the image-card elements in a div
	function choiceCount(catagory) {
		var images = document.querySelectorAll("div#" + catagory + " image-card");
		return images.length;
	}

	//Multiply all the image-card counts together for a total
	function multiplyAll() {
		var count = choiceCount("logo") * choiceCount("logoColor") * choiceCount("backgroundColor") * choiceCount("backgroundStyle") * choiceCount("shape");
		return numberWithCommas(count);
	}

	//Sudo-random count of options
	function randomishColorCount() {
		var count = 0;
		for (var i = 0; i < logoSchemes.length; i++) {
			count += logoSchemes[i].backgroundColorSchemes.length;
		}
		return count;
	}

	//Multiply the sudo-random combinations
	function randomishCombinations() {
		var count = choiceCount("logo") * randomishColorCount() * choiceCount("backgroundStyle") * choiceCount("shape");
		return numberWithCommas(count);
	}

	//Apply the total to the combination span
	var countElement = document.querySelector(".combinations");
	countElement.textContent = multiplyAll();
	countElement.title = "~" + randomishCombinations() + " decent combinations.";
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

//Toggle darkmode on and off
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

//Random icon generator
function randomIcon() {
	//Get random values for each choice
	var backgroundColorIndex = Math.floor(Math.random() * (backgroundColorNames.length));
	var backgroundStyleIndex = Math.floor(Math.random() * (backgroundStyleNames.length));
	var logoIndex = Math.floor(Math.random() * (logoNames.length));
	var logoColorIndex = Math.floor(Math.random() * (logoColorNames.length));
	var shapeIndex = Math.floor(Math.random() * (shapeNames.length));

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
		var card = document.querySelector("#logo image-card[name='" + logoNames[logoIndex] + "']")
		var head = card.getAttribute("head");
		var description = card.getAttribute("description");
		setDescription(head, description);
	}
	if (document.querySelector("#logoColor .unlock")) {
		setLogoColor(logoColorNames[logoColorIndex]);
	}
	if (document.querySelector("#shape .unlock")) {
		setShape(shapeNames[shapeIndex]);
	}
}

//Sudo-random icon generator
function randomishIcon() {
	//Get random values for each choice
	// var backgroundColorIndex = Math.floor(Math.random() * backgroundColorNames.length));
	var backgroundColorIndex;
	var backgroundStyleIndex = Math.floor(Math.random() * (backgroundStyleNames.length));
	var logoIndex = Math.floor(Math.random() * (logoNames.length));
	// var logoColorIndex = Math.floor(Math.random() * logoColorNames.length));
	var logoColorIndex;
	var shapeIndex = Math.floor(Math.random() * (shapeNames.length));

	//Check for color locks
	if (document.querySelector("#backgroundColor .lock")) {
		//Background locked
		var backgroundColorName = document.querySelector("#backgroundColor image-card.active").getAttribute("name");
		for (var i = 0; i < backgroundSchemes.length; i++) {
			if (backgroundSchemes[i].backgroundColor == backgroundColorName) {
				backgroundColorIndex = i;
				break;
			}
		}
		logoColors = backgroundSchemes[backgroundColorIndex].logoColorSchemes;
		logoColorIndex = Math.floor(Math.random() * logoColors.length);

		if (document.querySelector("#logoColor .unlock")) {
			setLogoColor(backgroundSchemes[backgroundColorIndex].logoColorSchemes[logoColorIndex]);
		}

	} else {
		//Logo locked
		if (document.querySelector("#logoColor .lock")) {
			var logoColorName = document.querySelector("#logoColor image-card.active").getAttribute("name");
			for (var i = 0; i < logoSchemes.length; i++) {
				if (logoSchemes[i].logoColor == logoColorName) {
					logoColorIndex = i;
					break;
				}
			}
		} else {
			//No lock
			logoColorIndex = Math.floor(Math.random() * logoSchemes.length);
		}
		backgroundColors = logoSchemes[logoColorIndex].backgroundColorSchemes;
		backgroundColorIndex = Math.floor(Math.random() * backgroundColors.length);
		if (document.querySelector("#logoColor .unlock")) {
			setLogoColor(logoColorNames[logoColorIndex]);
		}
		if (document.querySelector("#backgroundColor .unlock")) {
			setBackgroundColor(logoSchemes[logoColorIndex].backgroundColorSchemes[backgroundColorIndex]);
		}
	}

	//Genre calculations
	var logoName = logoNames[logoIndex];
	var logoElement = document.querySelector("image-card[name="+logoName+"]");
	var genre = logoElement.parentNode.getAttribute("id");

	if (devMode) {
		console.log("Logo Color Index: " + logoColorIndex);
		console.log("BG Color Index: " + backgroundColorIndex);
		// console.log("BG Style Index: " + backgroundStyleIndex);
		// console.log("Logo Index: " + logoIndex);
		// console.log("Shape Index: " + shapeIndex);
	}
	//Setting the icon
	if (document.querySelector("#backgroundStyle .unlock")) {
		setBackgroundStyle(backgroundStyleNames[backgroundStyleIndex]);
	}
	if (document.querySelector("#logo .unlock")) {
		setGenre(genre);
		setLogo(logoNames[logoIndex]);
		var card = document.querySelector("#logo image-card[name='" + logoNames[logoIndex] + "']")
		var head = card.getAttribute("head");
		var description = card.getAttribute("description");
		setDescription(head, description);
	}
	if (document.querySelector("#shape .unlock")) {
		setShape(shapeNames[shapeIndex]);
	}
}

//Change description
function setDescription(head, flavor) {
	document.getElementById("title").textContent = head;
	document.getElementById("description").innerHTML = flavor;
}

//Random icon lock switch
function swapLock(button) {
	if (button.className == "lock") {
		button.className = "unlock";
	} else {
		button.className = "lock";
	}
}
