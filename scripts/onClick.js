//JS file in charge of adding on click events (and other events, but mostly click)
//Most function names should be self-explanatory
//Author: Nathanael Jacobsma

function addClicks() {
	//Functions embeded in this function as to clean up global functions
	autoPumpkin();
	backgroundColorClicks();
	backgroundStyleClicks();
	clearSearchButton();
	darkmodeButton();
	downloadLink();
	genreClicks();
	lockButton();
	logoClicks();
	logoColorClicks();
	randomishLink();
	randomLink();
	searchBox();
	shapeClicks();
	shareLink();

	// Automatically change the shape to pumpkin if the texture is clicked
	function autoPumpkin() {
		$("#backgroundStyle image-card[name=Pumpkin]").click(function() {
			setShape("Pumpkin");
		});
	}

	function backgroundColorClicks() {
		$("#backgroundColor image-card").click(function() {
			var name = this.getAttribute("name");
			setBackgroundColor(name);
		});
	}

	function backgroundStyleClicks() {
		$("#backgroundStyle image-card").click(function() {
			var name = this.getAttribute("name");
			setBackgroundStyle(name);
		});
	}

	function clearSearchButton() {
		$("#clearSearch").click(clearSearch);
	}

	function darkmodeButton() {
		$("#darkmode").click(darkmodeToggle);
	}

	function downloadLink() {
		$("#download, #canvasLink").click(downloadCanvas);
	}

	function genreClicks() {
		$("#genre image-card").click(function() {
			var name = this.getAttribute("name");
			setGenre(name);
		});
	}

	function lockButton() {
		$("button.lock, button.unlock").click(function() {
			swapLock(this);
		});
	}

	function logoClicks() {
		$("#logo image-card").click(function() {
			var name = this.getAttribute("name");
			var head = this.getAttribute("head");
			var description = this.getAttribute("description");
			setLogo(name);
			setDescription(head, description);
		});
	}

	function logoColorClicks() {
		$("#logoColor image-card").click(function() {
			var name = this.getAttribute("name");
			setLogoColor(name);
		});
	}

	function randomishLink() {
		$("#sudorandom").click(randomishIcon);
	}

	function randomLink() {
		$("#random").click(randomIcon);
	}

	function searchBox() {
		$("#searchBox").change(search).keyup(search);
	}

	function shapeClicks() {
		$("#shape image-card").click(function() {
			var name = this.getAttribute("name");
			setShape(name);
		});
	}

	function shareLink() {
		$("#share").click(copyLink);
	}
}
