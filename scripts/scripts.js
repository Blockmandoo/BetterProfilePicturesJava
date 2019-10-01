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
			console.log("Setting to light mode.")
		}
	} else {
		body.className = "darkMode";
		toggle.className = "";
		if (devMode) {
			console.log("Setting to dark mode.")
		}
	}
}

//Count all the image-card elements in a div
function choiceCount(catagory) {
	var images = document.querySelectorAll("div#" + catagory + " image-card");
	return images.length;
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
