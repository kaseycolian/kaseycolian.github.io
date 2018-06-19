const navigation = document.getElementById('navigation');
const navMenu = document.querySelector('nav ul');
const nav = document.querySelector('nav');
const headerText = document.getElementById('header');

button = document.createElement('button');
button.innerHTML = 'Hide Navigation';	
navMenu.appendChild(button);
button.classList.add('hide-side-button');
showButton = document.createElement('button');
showButton.innerHTML = 'Show Nav';
container.appendChild(showButton);
showButton.classList.add('show-nav-button');
showButton.setAttribute("id", "show-button");
showButton.style.display="none";

const inner = document.getElementById('inner');
const footer = document.getElementById('footer');

//hiding side Nav:
button.addEventListener('click', function(){
	navigation.style.display = "none";
	showButton.style.display = "block";
	inner.style.marginLeft = "-14rem";
	header.style.marginLeft = "-14rem";
	footer.style.marginLeft = "0rem";
	footer.style.paddingLeft="1rem";
	showButton.style.transform = "rotateX(28.5deg) rotateY(8deg) rotateZ(15deg) scale(1)";
	showButton.style.right = "1rem";
	footer.style.justifyContent = "space-betwen";
});

//showing side Nav:
showButton.addEventListener('click', function(){
	navigation.style.display = "block";
	inner.style.marginLeft = "0rem";
	footer.style.marginLeft = "15rem";
	header.style.marginLeft = "0rem";
	footer.style.justifyContent = "space-between";
	document.getElementById('show-button').style.display = "none";
});

showButton.addEventListener('mouseenter', function(){
	showButton.style.transform="scale(.90)";
	showButton.style.right=".25rem";
	showButton.style.transition = ".5s";
	showButton.style.fontSize="1.37rem";
	showButton.style.fontWeight="bold";
	showButton.transitionTimingFunction="ease";
});

showButton.addEventListener('mouseout', function(){
	showButton.style.transform = "rotate(0deg) scale(1)";
	showButton.style.transition = "3s";
	showButton.style.fontSize="1.5rem";
	showButton.style.fontWeight="bold";
	showButton.style.right=".25rem";
	showButton.style.position="block";
});
//navigation links resizing
const listItems = document.querySelectorAll('nav ul li a');
listItems.forEach(function(listItem) {
	listItem.addEventListener('mouseenter', function() {
		this.style.fontSize = '1.5rem';
	})
	listItem.addEventListener('mouseout', function(){
		this.style.fontSize = '1.2rem';
	})
})

//modal box
const modal = document.getElementById('modalBox');
const modalLink = document.getElementById('modalLink');
const closeLink = document.getElementsByClassName("close")[0];

modalLink.addEventListener("click", function (){
	modal.style.display = "block";
});

closeLink.addEventListener("click", function() {
	modal.style.display = "none";
});

//project carousel
const projectImages = document.querySelectorAll('.projectImages');
const projectInfoButtons = document.querySelectorAll('.projectDetails');
const leftButton = document.getElementById('left');
const rightButton =document.getElementById('right');
const mobileView = window.matchMedia('(max-width: 700px)');


//enlarging project images on click & descaling on click of image:
for (let i = 0; i<projectImages.length; i++){
	if (!(mobileView.matches)){
		projectImages[i].addEventListener('click', enlargeProjectImages);
	}
};

//rescaling project images on escape
for (let i = 0; i<projectImages.length; i++){
	document.addEventListener('keydown', event=>{
		if (event.key === 'Escape' || event.keyCode === 27){
			if(projectImages[i].style.transform === "scale(1.4)"){
				projectImages[i].style.transform ="scale(1.00)";
				leftButton.style.visibility = "visible";
				rightButton.style.visibility = "visible";
			}
		}
	});		
}

const body = document.getElementsByTagName('BODY');
for (let i = 0; i<projectImages.length; i++){
	if(projectImages[i].style.transform === "scale(1.4)"){
		body.addEventListener('click', function(){
			projectImages[i].style.transform ="scale(1.00)";
			leftButton.style.visibility = "visible";
			rightButton.style.visibility = "visible";
		});
	}
}

function enlargeProjectImages(){
	let projectImage = document.getElementById(this.dataset.imageid);
	//create a toggle to toggle between class enlarged (scale 1.2) & regular (scale 1.0)

		if(this.style.transform === "scale(1.4)"){
			this.style.transform ="scale(1.00)";
			this.style.zIndex = '1';
			leftButton.style.visibility = "visible";
			rightButton.style.visibility = "visible";	
		} else{
			this.style.transform = 'scale(1.4)';
			this.style.zIndex = '2';
			leftButton.style.visibility="hidden";
			rightButton.style.visibility="hidden";
		}
}

for (let i = 0; i<projectInfoButtons.length; i++){
	projectInfoButtons[i].addEventListener('click', function(){

		let reviewContent = document.getElementById(this.dataset.contentid);
		let projectImage = document.getElementById(this.dataset.imageid);

		if (reviewContent.style.visibility == 'hidden'){
			reviewContent.style.visibility = 'visible';
			reviewContent.style.display = 'flex';
			reviewContent.style.flexDirection = 'column';
			reviewContent.style.alignItems = 'center';
			reviewContent.style.marginTop = '1rem'
			reviewContent.style.paddingLeft = '1rem';
			reviewContent.style.paddingRight = '1rem';
			reviewContent.style.fontSize = '1.25rem';
			// reviewContent.style.zIndex = '5000';
			projectImage.style.transform='scale(.9)';
			leftButton.style.visibility = "visible";
			rightButton.style.visibility = "visible";
			this.style.transform = 'scale(.8)';
			this.style.transitionDuration= '1s';
			this.style.marginBottom = '.5rem';
			this.innerHTML = 'Hide Project Details';
		}
		else{
			reviewContent.style.visibility = 'hidden';
			reviewContent.style.display = "none";
			reviewContent.style.flexDirection = "column";
			reviewContent.style.alignItems = "center";
			reviewContent.style.marginTop = '2rem';
			reviewContent.style.marginBottom = '5rem';
			reviewContent.style.paddingLeft = "1rem";
			reviewContent.style.paddingRight = "1rem";
			projectImage.style.transform='scale(1)';
			if (mobileView.matches){
				this.style.marginBottom = '4rem';
			}
			else {
				this.style.marginBottom = '7rem';
			}
			this.style.transform = "scale(1)";
			this.style.transitionDuration= '1s';
			this.innerHTML = 'Show Project Details';
		}
	});
}

let slide_index = 1;  
displaySlides(slide_index);  
allContent = document.querySelectorAll('projectContent');

function initializeSlideFunctionMobile(){
	let touchStartX = 0;
	let touchEndX = 0;
	let touchStartY = 0;
	let touchEndY = 0;

//swipe left/right on project images for mobile
	for (let i = 0; i<projectImages.length; i++){
		// let projectImage = document.getElementById(this.dataset.imageid);
		projectImages[i].addEventListener('touchstart', function(event){
		// let gestureZone = document.getElementById(this.dataset.gestureZone);
			touchStartX = event.changedTouches[0].screenX;
			touchStartY = event.changedTouches[0].screenY;
		}, false);
		projectImages[i].addEventListener('touchend', function(event){
			touchEndX = event.changedTouches[0].screenX;
			touchEndY = event.changedTouches[0].screenY;
			handleGesture(touchStartX, touchEndX, touchStartY, touchEndY);
		}, false);
	}
}

initializeSlideFunctionMobile();

function handleGesture(touchStartX, touchEndX, touchStartY, touchEndY){
	const swipeRight = (touchEndX - touchStartX) > 175;
	const swipeLeft = (touchStartX - touchEndX) > 175;
	const swipeUp = (touchStartY - touchEndY) > 0;
	const swipeDown = (touchEndY - touchStartY) > 0;
	if (swipeRight){
		displaySlides(slide_index+1);
	}
	if (swipeLeft){
		displaySlides(slide_index-1);
	}
	if (((touchEndX - touchStartX) > 0 || (touchStartX - touchEndX) > 0) && (swipeUp || swipeDown)){
		displaySlides(slide_index);
	}
	else{
		displaySlides(slide_index);
	}
}

leftButton.addEventListener('click', function(){
	for (let i = 0; i<allContent.length; i++){
		let reviewContent = document.getElementById(this.dataset.contentid);
		
		if (reviewContent.style.visibility=='visible'){
			this.style.display='none';
		}
		else{
			this.style.visibility='hidden';
		}
	}
	displaySlides(slide_index+1);
});

rightButton.addEventListener('click', function () {
	displaySlides(slide_index-1);
});

function displaySlides(n) {  
	let i;  
	const slides = document.getElementsByClassName("showSlide");  
	if (n > slides.length - 1) { 
		slide_index = 0 
	}  
	else if (n < 0) { 
		slide_index = slides.length - 1;
	} 
	else {
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


//AllYourBase video - SWITCH TO TOGGLE CLASS
const allYourBaseVideo = document.querySelector('.hiddenVideo');
const easterEgg = document.querySelector('.easter__egg');
const videoUrl = document.querySelector('.allYourBase');

easterEgg.addEventListener('click', function() {
	console.log('clicked');
// if (mobileView.matches){
// 	console.log('mobile');
// 	allYourBaseVideo.className = '.displayVideo';
// 	videoUrl.src = "https://www.youtube.com/embed/8fvTxv46ano?autoplay=1";
// 	videoUrl.allow = "autoplay; encrypted-media";
// }
	if (allYourBaseVideo.className === 'hiddenVideo'){
		console.log('hidden');
		allYourBaseVideo.className = '.displayVideo';
		videoUrl.src = "https://www.youtube.com/embed/8fvTxv46ano?autoplay=1";
	} else {
		console.log('visible');
		allYourBaseVideo.className = 'hiddenVideo';
		videoUrl.src = "";
	}
});