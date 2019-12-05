//JS File to animate the images at the bottom of the 404 page
//Author: Nathanael Jacobsma

function flyingImage() {
  var body = document.querySelector("body"),
      imgTest = document.createElement("img"),
      horizontalLoc = Math.floor(Math.random() * 101) + "%",
      imgNumber = randomImgNumber(60);
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

//Generate image number
var previousImages = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
function randomImgNumber(imgCount) {
  for (var keepGo = true; keepGo;) {
    var imgNumber = Math.floor(Math.random() * imgCount) + 1;

    //If the random matches any of the previous 10, reset the loop and try again
    switch (imgNumber) {
      case previousImages[0]: case previousImages[1]: case previousImages[2]: case previousImages[3]: case previousImages[4]:
      case previousImages[5]: case previousImages[6]: case previousImages[7]: case previousImages[8]: case previousImages[9]:
        //Repeated number
        keepGo = true;
        break;
      default:
        //Successful number
        keepGo = false;
    }
  }
  //Roll all the image numbers down to add the new number into the array
  previousImages[9] = previousImages[8], previousImages[8] = previousImages[7],
  previousImages[7] = previousImages[6], previousImages[6] = previousImages[5],
  previousImages[5] = previousImages[4], previousImages[4] = previousImages[3],
  previousImages[3] = previousImages[2], previousImages[2] = previousImages[1],
  previousImages[1] = previousImages[0], previousImages[0] = imgNumber;
  return imgNumber;
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
