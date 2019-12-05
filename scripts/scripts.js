//JS file with the mojority of the loose end code, anytime something needs code, and doesn't have a good file to go in, it goes here.
//Basically the desktop for my site
//Author: Nathanael Jacobsma

var backgroundColorNames = [],
		backgroundStyleNames = [],
		logoNames = [],
		logoColorNames = [],
		shapeNames = [],
		devMode = false;

//Activate active cards
function activateCards() {
	document.querySelector("#backgroundColor [name='" + globalBackgroundColor + "']").classList.add("active");
	document.querySelector("#logo #" + globalGenre + " [name='" + globalLogo + "']").classList.add("active");
	document.querySelector("#logoColor [name='" + globalLogoColor + "']").classList.add("active");
	document.querySelector("#shape [name='" + globalShape + "']").classList.add("active");
	document.querySelector("#backgroundStyle [name='" + globalBackgroundStyle + "']").classList.add("active");
}

//Apply the total to the combination span
function applyCount() {
	//Count all the image-card elements in a div
	function getChoiceCount(catagory) {
		var images = document.querySelectorAll("div#" + catagory + " image-card:not(.holiday):not(.activeHoliday):not(.searchHidden)");
		return images.length;
	}

	//Count all the holiday image-card elements in a div
	function getHolidayCount(catagory) {
		var images = document.querySelectorAll("div#" + catagory + " image-card.activeHoliday:not(.searchHidden)");
		return images.length;
	}

	//Count all the search image-card elements in a div
	function getSearchCount(catagory) {
		var images = document.querySelectorAll("div#" + catagory + " image-card.searchHidden");
		return images.length;
	}

	//Get the final count for the catagory
	function getBothCount(catagory) {
		return getChoiceCount(catagory) + getHolidayCount(catagory);
	}

	//Multiply all the image-card counts together for a total
	function multiplyAll() {
		var count = getBothCount("logo") * getBothCount("logoColor") * getBothCount("backgroundColor") * getBothCount("backgroundStyle") * getBothCount("shape");
		return numberWithCommas(count);
	}

	//Code injected from the interwebs because it makes no sense but works
	function numberWithCommas(number) {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
		var count = getChoiceCount("logo") * randomishColorCount() * getChoiceCount("backgroundStyle") * getChoiceCount("shape");
		return numberWithCommas(count);
	}

	function setChoiceCount(catagory) {
		var count = getChoiceCount(catagory) + getHolidayCount(catagory);
		var countElement = document.querySelector("#" + catagory + " .choiceCount");
		countElement.innerHTML = "(" + count + " options)";
	}

	function setLogoChoiceCount() {
		var logosCatagories = document.querySelectorAll("div#logo > div");
		for (var i = 0; i < logosCatagories.length; i++) {
			var catagory = logosCatagories[i].id;
			setChoiceCount(catagory);
		}

	}

	//Apply the total to the combination span
	var combinationElement = document.querySelector(".combinations");
	if (combinationElement) {
		combinationElement.innerHTML = multiplyAll();
		combinationElement.title = "~" + randomishCombinations() + " decent combinations.";
	}
	setChoiceCount("genre");
	setLogoChoiceCount();
	setChoiceCount("logoColor");
	setChoiceCount("backgroundColor");
	setChoiceCount("backgroundStyle");
	setChoiceCount("shape");
}

//Generate tooltips for logos
function applyHead() {
	var logoCards = document.querySelectorAll("#logo image-card");
	for (var i = 0; i < logoCards.length; i++) {
		var logoCard = logoCards[i]
		var tooltip = document.createElement("tool-tip");
		var header = document.createElement("p");
		var headName = logoCard.getAttribute("head");
		tooltip.appendChild(header);
		header.innerHTML = headName;
		if (logoCard.prepend) {
			logoCard.prepend(tooltip);
		} else if (logoCard.appendChild) {
			//IE Support because IE sucks
			logoCard.appendChild(tooltip);
		}
	}
}

//intialization to get all the possible options
function catalogChoices() {
	var backgroundColors = document.querySelectorAll("#backgroundColor image-card:not(.holiday)");
	var backgroundStyles = document.querySelectorAll("#backgroundStyle image-card:not(.holiday)");
	var logos = document.querySelectorAll("#logo image-card");
	var logoColors = document.querySelectorAll("#logoColor image-card:not(.holiday)");
	var shapes = document.querySelectorAll("#shape image-card:not(.holiday)");
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

//Clear the search bar, and reset the search
function clearSearch() {
	var searchBox = document.querySelector("#searchBox");
	searchBox.value = "";
	search();
}

//Copy link button
function copyLink() {
	// https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
	var announcement = document.querySelector("#shareText");
	var link = "https://betterprofilepicturejava.netlify.com/" + "?genre=" + globalGenre + "&logo=" + globalLogo + "&logoColor=" + globalLogoColor + "&bgColor=" + globalBackgroundColor + "&bgStyle=" + globalBackgroundStyle + "&shape=" + globalShape;
	var copyArea = document.querySelector("#shareLink");
	copyArea.value = link;

  copyArea.select();
  copyArea.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy");

	announcement.className = "";
	setTimeout(hideAnnouncement, 3000);
	function hideAnnouncement() {
		announcement.className = "hidden";
	}
}

//Check storage for what darkmode should be in
function darkmodeCheck() {
	var body = document.querySelector("body");
	var toggle = document.querySelector("label[for='darkmode']");
	switch (getCookie("darkmode")) {
		case "true":
			body.className = "darkMode";
			if (toggle) {toggle.className = "";}
			break;
		case "false":
			body.className = "lightMode";
			if (toggle) {toggle.className = "checked";}
			break;
		case "":
			setCookie("darkmode", "true");
			body.className = "darkMode";
			if (toggle) {toggle.className = "";}
			break;
	}
}

//Toggle darkmode on and off
function darkmodeToggle() {
	var body = document.querySelector("body");
	var toggle = document.querySelector("label[for='darkmode']");
	if (body.classList[0] === "darkMode") {
		body.className = "lightMode";
		toggle.className = "checked";
		setCookie("darkmode", "false");
		if (devMode) {
			console.log("Setting to light mode.");
		}
	} else {
		body.className = "darkMode";
		toggle.className = "";
		setCookie("darkmode", "true");
		if (devMode) {
			console.log("Setting to dark mode.");
		}
	}
}

//Delete any variable from cookies
function delCookie(name) {
	document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
	document.cookie = name + "; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
	return document.cookie;
}

//Grab any variable from cookies
function getCookie(cname) {
	// https://www.w3schools.com/js/js_cookies.asp
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(';');
  for(var i = 0; i <cookieArray.length; i++) {
    var cookieVar = cookieArray[i];
    while (cookieVar.charAt(0) === ' ') {
      cookieVar = cookieVar.substring(1);
    }
    if (cookieVar.indexOf(name) === 0) {
      return cookieVar.substring(name.length, cookieVar.length);
    }
  }
  return "";
}

//Show limited edition images based on month
function getHoliday() {
	var date = new Date();
	var month = date.getMonth();
	var day = date.getDate();
	switch (month) {
		case 0: //January
			showHoliday("chineseNewYear");
			if (day < 2) {showHoliday("newYear");}
			break;
		case 1: //Febuary
			showHoliday("chineseNewYear");
			showHoliday("valentines");
			break;
		case 2: //March
			showHoliday("stPatricks");
			break;
		case 3: //April
			showHoliday("easter");
			break;
		case 4: //May
			// showHoliday("");
			break;
		case 5: //June
			// showHoliday("");
			break;
		case 6: //July
			showHoliday("forthOfJuly");
			break;
		case 7: //August
			// showHoliday("");
			break;
		case 8: //September
			// showHoliday("");
			break;
		case 9: //October
			showHoliday("halloween");
			break;
		case 10: //November
			showHoliday("thanksgiving");
			if (day > 27) {showHoliday("christmas");}
			break;
		case 11: //December
			showHoliday("christmas");
			showHoliday("hanukkah");
			showHoliday("kwanzaa");
			showHoliday("yule");
			if (day > 20) {showHoliday("newYear");}
			break;
	}

	function showHoliday(holiday) {
		var cards = document.querySelectorAll("image-card.holiday." + holiday);
		for (var i = 0; i < cards.length; i++) {
			cards[i].className = "activeHoliday " + holiday;
		}
  }
}

//Remove loading animation
function loadingComplete() {
	document.querySelector("div.loading").classList.add("complete")
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
			if (backgroundSchemes[i].backgroundColor === backgroundColorName) {
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
				if (logoSchemes[i].logoColor === logoColorName) {
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

//Search for a desired choice
function search() {
  //Un-hide all search results
  var hidden = document.querySelectorAll(".searchHidden");
  for (var i = 0; i < hidden.length; i++) {
    hidden[i].classList.remove("searchHidden");
  }

  //Execute if there is a search
  var searchValue = document.querySelector("#searchBox").value.toUpperCase();
  if (searchValue !== "") {
    //Hide logo choices
    document.querySelector("#logo").classList.add("hidden");
    var activeCard = document.querySelector("#genre > image-card.active")
    if (activeCard) {
      activeCard.classList.remove("active");
    }

    //Hide paragraphs in catagories if there is a search
		hideElement("main > div > p:not(.description)");
		hideElement("main > div > br");
  }

  var allCards = document.querySelectorAll("div:not(#genre) image-card");
  for (var i = 0; i < allCards.length; i++) {
    var card = allCards[i];

    //Count valid matches
    var nameAmount = checkAmount(card, "name");
    var headAmount = checkAmount(card, "head");
    var descriptionAmount = checkAmount(card, "description");
    var keywordsAmount = checkAmount(card, "keywords");
    var tooltipAmount = checkHTMLAmount(card, "tool-tip");

    //Hide all image-cards that do not match the search in any way
    if (nameAmount === -1 && headAmount === -1 && descriptionAmount === -1 && keywordsAmount === -1 && tooltipAmount === -1) {
      card.classList.add("searchHidden");
    }
  }

  //Hide any genre that is empty
  var genreCards = document.querySelectorAll("#genre image-card");
  for (var i = 0; i < genreCards.length; i++) {
    var genreName = genreCards[i].getAttribute("name");
    var options = document.querySelectorAll("#" + genreName + " image-card:not(.searchHidden)");
    if (options.length === 0) {
			hideElement("image-card[name="+ genreName +"]");
    }
  }

  //Hide any option group that is empty
  var catagoryDivs = document.querySelectorAll("main > div");
  for (var i = 0; i < catagoryDivs.length; i++) {
    var didElement = catagoryDivs[i]
    var options = didElement.querySelectorAll("image-card:not(.searchHidden):not(.holiday)");
    if (options.length === 0) {
      didElement.classList.add("searchHidden");
    }
  }

  //If there are no possible options, display no search results
  var hiddenDivs = document.querySelectorAll("main > div:not(.searchHidden)");
  var noResults = document.querySelector("#noResults");
  if (hiddenDivs.length !== 0) {
    noResults.classList.add("hidden");
  } else {
    noResults.classList.remove("hidden");
  }

  applyCount();

	//Check index of search, and if there are no results return -1
  function checkAmount(card, name) {
    var checkValue = card.getAttribute(name)
    if (checkValue) {
      return checkValue.toUpperCase().indexOf(searchValue);
    } else {
      return -1;
    }
  }
	//Check index of search in tool-tip, and if there are no results return -1
  function checkHTMLAmount(checkValue) {
    if (checkValue) {
      return checkValue.innerHTML.toUpperCase().indexOf(searchValue);
    } else {
      return -1;
    }
  }
	//Hide elements with a special searchHidden class
	function hideElement(cssID) {
		var elements = document.querySelectorAll(cssID);
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.add("searchHidden");
    }
	}
}

//Set all holidays active (for dev purposes)
function setAllHolidays() {
	var cards = document.querySelectorAll("image-card.holiday");
	for (var i = 0; i < cards.length; i++) {
		cards[i].className = "activeHoliday";
	}
	applyCount();
}

//Set any variable in cookies
function setCookie(name, value) {
	document.cookie = name + "=" + value;
}

//Change description
function setDescription(head, flavor) {
	document.getElementById("title").innerHTML = head;
	document.getElementById("description").innerHTML = flavor;
}

//Set the holiday (for dev purposes)
function setHoliday(holiday) {
	var cards = document.querySelectorAll("image-card.holiday." + holiday);
	for (var i = 0; i < cards.length; i++) {
		cards[i].className = "activeHoliday " + holiday;
	}
	applyCount();
}

//Get and set icon based on url
function setIcon() {
	//https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
	function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
	}

	// query string: ?genre=Games&logo=Sims&logoColor=Peridot&bgColor=Midnight&bgStyle=StarGrid&shape=Hexagon
	var bgColor = getParameterByName('bgColor');
	var bgStyle = getParameterByName('bgStyle');
	var genre = getParameterByName('genre');
	var logo = getParameterByName('logo');
	var logoColor = getParameterByName('logoColor');
	var shape = getParameterByName('shape');

	if (bgColor) setBackgroundColor(bgColor);
	if (bgStyle) setBackgroundStyle(bgStyle);
	if (genre) setGenre(genre);
	if (logo) setLogo(logo);
	if (logoColor) setLogoColor(logoColor);
	if (shape) setShape(shape);
}

//Show all keywords for image-cards (dev function)
function showKeywords() {
var keyworded = document.querySelectorAll("image-card[keywords]");
for (var i = 0; i < keyworded.length; i++) {
var keywords = keyworded[i].getAttribute("keywords").split(" ");
for (var j = 0; j < keywords.length; j++) {
	var node = document.createElement("p");
	node.appendChild(document.createTextNode(keywords[j]));
	var tooltip = keyworded[i].querySelector("tool-tip");
	tooltip.appendChild(node);
}
}
}

//Random icon lock switch
function swapLock(button) {
	if (button.className === "lock") {
		button.className = "unlock";
	} else {
		button.className = "lock";
	}
}
