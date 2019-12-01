function flyingImage() {
  var body = document.querySelector("body"),
      imgTest = document.createElement("img"),
      horizontalLoc = Math.floor(Math.random() * 101) + "%",
      imgNumber = Math.floor(Math.random() * 60) + 1;
  imgTest.classList.add("flyingImageStart");
  imgTest.setAttribute("src","assets/404images/" + imgNumber + ".png");
  imgTest.setAttribute("alt","");
  imgTest.style.left = horizontalLoc
  body.appendChild(imgTest);

  //Start transition
  setTimeout(function() {
    imgTest.classList.add("flyingImageEnd");
  },500)

  //Calculate transition time
  var style = getComputedStyle(imgTest),
      string = style.transitionDuration,
      delay = 1000 * Number(string.replace("s",""));

  //Delete image once its done transitioning
  setTimeout(function() {
    body.removeChild(imgTest);
  }, delay + 500);
}

//Loop image creation
var loop;
function loopFlyingImage(interval) {
  clearInterval(loop);
  loop = setInterval(function() {
    flyingImage();
  }, interval * 1000)
}

//Initialize function once window loads
if (window.addEventListener) {
  window.addEventListener("load", function() {
    loopFlyingImage(.666);
  }, false);
} else if (window.attachEvent) {
  window.attachEvent("onLoad", function() {
    loopFlyingImage(.666);
  });
} else {
	loopFlyingImage(.666);
}
