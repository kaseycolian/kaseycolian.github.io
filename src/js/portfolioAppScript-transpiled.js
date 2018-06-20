'use strict';

var navigation = document.getElementById('navigation');
var navMenu = document.querySelector('nav ul');
var nav = document.querySelector('nav');
var headerText = document.getElementById('header');

var button = document.createElement('button');
button.innerHTML = 'Hide Navigation';
navMenu.appendChild(button);
button.classList.add('hide-side-button');
var showButton = document.createElement('button');
showButton.innerHTML = 'Show Nav';
container.appendChild(showButton);
showButton.classList.add('show-nav-button');
showButton.setAttribute("id", "show-button");
showButton.style.display = "none";

var inner = document.getElementById('inner');
var footer = document.getElementById('footer');

//hiding side Nav:
button.addEventListener('click', function () {
	navigation.style.display = "none";
	showButton.style.display = "block";
	inner.style.marginLeft = "-14rem";
	header.style.marginLeft = "-14rem";
	footer.style.marginLeft = "0rem";
	footer.style.paddingLeft = "1rem";
	showButton.style.transform = "rotateX(28.5deg) rotateY(8deg) rotateZ(15deg) scale(1)";
	showButton.style.right = "1rem";
	footer.style.justifyContent = "space-betwen";
});

//showing side Nav:
showButton.addEventListener('click', function () {
	navigation.style.display = "block";
	inner.style.marginLeft = "0rem";
	footer.style.marginLeft = "15rem";
	header.style.marginLeft = "0rem";
	footer.style.justifyContent = "space-between";
	document.getElementById('show-button').style.display = "none";
});

showButton.addEventListener('mouseenter', function () {
	showButton.style.transform = "scale(.90)";
	showButton.style.right = ".25rem";
	showButton.style.transition = ".5s";
	showButton.style.fontSize = "1.37rem";
	showButton.style.fontWeight = "bold";
	showButton.transitionTimingFunction = "ease";
});

showButton.addEventListener('mouseout', function () {
	showButton.style.transform = "rotate(0deg) scale(1)";
	showButton.style.transition = "3s";
	showButton.style.fontSize = "1.5rem";
	showButton.style.fontWeight = "bold";
	showButton.style.right = ".25rem";
	showButton.style.position = "block";
});
//navigation links resizing
var listItems = document.querySelectorAll('nav ul li a');
listItems.forEach(function (listItem) {
	listItem.addEventListener('mouseenter', function () {
		this.style.fontSize = '1.5rem';
	});
	listItem.addEventListener('mouseout', function () {
		this.style.fontSize = '1.2rem';
	});
});

//modal box
var modal = document.getElementById('modalBox');
var modalLink = document.getElementById('modalLink');
var closeLink = document.getElementsByClassName("close")[0];

modalLink.addEventListener("click", function () {
	modal.style.display = "block";
});

closeLink.addEventListener("click", function () {
	modal.style.display = "none";
});

//project carousel
var projectImages = document.querySelectorAll('.projectImages');
var projectInfoButtons = document.querySelectorAll('.projectDetails');
var leftButton = document.getElementById('left');
var rightButton = document.getElementById('right');
var mobileView = window.matchMedia('(max-width: 700px)');

//enlarging project images on click & descaling on click of image:
for (var i = 0; i < projectImages.length; i++) {
	if (!mobileView.matches) {
		projectImages[i].addEventListener('click', enlargeProjectImages);
	}
};

//rescaling project images on escape

var _loop = function _loop(_i) {
	document.addEventListener('keydown', function (event) {
		if (event.key === 'Escape' || event.keyCode === 27) {
			if (projectImages[_i].style.transform === "scale(1.4)") {
				projectImages[_i].style.transform = "scale(1.00)";
				leftButton.style.visibility = "visible";
				rightButton.style.visibility = "visible";
			}
		}
	});
};

for (var _i = 0; _i < projectImages.length; _i++) {
	_loop(_i);
}

var body = document.getElementsByTagName('BODY');

var _loop2 = function _loop2(_i2) {
	if (projectImages[_i2].style.transform === "scale(1.4)") {
		body.addEventListener('click', function () {
			projectImages[_i2].style.transform = "scale(1.00)";
			leftButton.style.visibility = "visible";
			rightButton.style.visibility = "visible";
		});
	}
};

for (var _i2 = 0; _i2 < projectImages.length; _i2++) {
	_loop2(_i2);
}

function enlargeProjectImages() {
	var projectImage = document.getElementById(this.dataset.imageid);
	//create a toggle to toggle between class enlarged (scale 1.2) & regular (scale 1.0)

	if (this.style.transform === "scale(1.4)") {
		this.style.transform = "scale(1.00)";
		this.style.zIndex = '1';
		leftButton.style.visibility = "visible";
		rightButton.style.visibility = "visible";
	} else {
		this.style.transform = 'scale(1.4)';
		this.style.zIndex = '2';
		leftButton.style.visibility = "hidden";
		rightButton.style.visibility = "hidden";
	}
}

for (var _i3 = 0; _i3 < projectInfoButtons.length; _i3++) {
	projectInfoButtons[_i3].addEventListener('click', function () {

		var reviewContent = document.getElementById(this.dataset.contentid);
		var projectImage = document.getElementById(this.dataset.imageid);

		if (reviewContent.style.visibility == 'hidden') {
			reviewContent.style.visibility = 'visible';
			reviewContent.style.display = 'flex';
			reviewContent.style.flexDirection = 'column';
			reviewContent.style.alignItems = 'center';
			reviewContent.style.marginTop = '1rem';
			reviewContent.style.paddingLeft = '1rem';
			reviewContent.style.paddingRight = '1rem';
			reviewContent.style.fontSize = '1.25rem';
			// reviewContent.style.zIndex = '5000';
			projectImage.style.transform = 'scale(.9)';
			leftButton.style.visibility = "visible";
			rightButton.style.visibility = "visible";
			this.style.transform = 'scale(.8)';
			this.style.transitionDuration = '1s';
			this.style.marginBottom = '.5rem';
			this.innerHTML = 'Hide Project Details';
		} else {
			reviewContent.style.visibility = 'hidden';
			reviewContent.style.display = "none";
			reviewContent.style.flexDirection = "column";
			reviewContent.style.alignItems = "center";
			reviewContent.style.marginTop = '2rem';
			reviewContent.style.marginBottom = '5rem';
			reviewContent.style.paddingLeft = "1rem";
			reviewContent.style.paddingRight = "1rem";
			projectImage.style.transform = 'scale(1)';
			if (mobileView.matches) {
				this.style.marginBottom = '4rem';
			} else {
				this.style.marginBottom = '7rem';
			}
			this.style.transform = "scale(1)";
			this.style.transitionDuration = '1s';
			this.innerHTML = 'Show Project Details';
		}
	});
}

var slide_index = 1;
displaySlides(slide_index);
var allContent = document.querySelectorAll('projectContent');

function initializeSlideFunctionMobile() {
	var touchStartX = 0;
	var touchEndX = 0;
	var touchStartY = 0;
	var touchEndY = 0;

	//swipe left/right on project images for mobile
	for (var _i4 = 0; _i4 < projectImages.length; _i4++) {
		// let projectImage = document.getElementById(this.dataset.imageid);
		projectImages[_i4].addEventListener('touchstart', function (event) {
			// let gestureZone = document.getElementById(this.dataset.gestureZone);
			touchStartX = event.changedTouches[0].screenX;
			touchStartY = event.changedTouches[0].screenY;
		}, false);
		projectImages[_i4].addEventListener('touchend', function (event) {
			touchEndX = event.changedTouches[0].screenX;
			touchEndY = event.changedTouches[0].screenY;
			handleGesture(touchStartX, touchEndX, touchStartY, touchEndY);
		}, false);
	}
}

initializeSlideFunctionMobile();

function handleGesture(touchStartX, touchEndX, touchStartY, touchEndY) {
	var swipeRight = touchEndX - touchStartX > 175;
	var swipeLeft = touchStartX - touchEndX > 175;
	var swipeUp = touchStartY - touchEndY > 0;
	var swipeDown = touchEndY - touchStartY > 0;
	if (swipeRight) {
		displaySlides(slide_index + 1);
	}
	if (swipeLeft) {
		displaySlides(slide_index - 1);
	}
	if ((touchEndX - touchStartX > 0 || touchStartX - touchEndX > 0) && (swipeUp || swipeDown)) {
		displaySlides(slide_index);
	} else {
		displaySlides(slide_index);
	}
}

leftButton.addEventListener('click', function () {
	for (var _i5 = 0; _i5 < allContent.length; _i5++) {
		var reviewContent = document.getElementById(undefined.dataset.contentid);

		if (reviewContent.style.visibility == 'visible') {
			undefined.style.display = 'none';
		} else {
			undefined.style.visibility = 'hidden';
		}
	}
	displaySlides(slide_index + 1);
});

rightButton.addEventListener('click', function () {
	displaySlides(slide_index - 1);
});

function displaySlides(n) {
	var i = void 0;
	var slides = document.getElementsByClassName("showSlide");
	if (n > slides.length - 1) {
		slide_index = 0;
	} else if (n < 0) {
		slide_index = slides.length - 1;
	} else {
		slide_index = n;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slide_index].style.display = "flex";
	slides[slide_index].style.flexDirection = "column";
	slides[slide_index].style.alignItems = "center";
}

function nextSlide(n) {
	displaySlides(slide_index += n);
}

function currentSlide(n) {
	displaySlides(slide_index = n);
}

//AllYourBase video
var allYourBaseVideo = document.querySelector('.hiddenVideo');
var easterEgg = document.querySelector('.easter__egg');
var videoUrl = document.querySelector('.allYourBase');

easterEgg.addEventListener('click', function () {
	if (allYourBaseVideo.className === 'hiddenVideo') {
		allYourBaseVideo.className = '.displayVideo';
		videoUrl.src = "https://www.youtube.com/embed/8fvTxv46ano?autoplay=1";
	} else {
		allYourBaseVideo.className = 'hiddenVideo';
		videoUrl.src = "";
	}
});
