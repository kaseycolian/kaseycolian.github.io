const asideNav = document.querySelector('nav');

const navMenu = document.querySelector('nav ul');
const nav = document.querySelector('nav');
const aside = document.querySelector('aside');
const projectInfo = document.querySelector('content h3');
const container = document.getElementById('container');
const headerText = document.getElementById('header');

button = document.createElement('button');
button.innerHTML = 'Hide Navigation';	
navMenu.appendChild(button);
button.classList.add('hide-side-button');

showButton = document.createElement('button');
showButton.innerHTML = 'Show Nav';
headerText.appendChild(showButton);
showButton.classList.add('show-nav-button');
showButton.setAttribute("id", "show-button");
showButton.style.display="none";


const projectName = document.querySelector('.project h3');


const leftButton = document.querySelector('.left');
const rightButton =document.querySelector('.right');
const projectButton = document.querySelector('.btn');

//button to show/hide project details
// const projectContent = document.querySelector('#projectContent');


const projectInfoButton = document.querySelector('.projectDetails');
const projectInfoButtons = document.querySelectorAll('projectDetails');

for (var i = 0; i<projectInfoButtons.length; i++){
	projectInfoButtons[i].addEventListener('click', function(){
		const projectInfoButtons = document.querySelectorAll('.projectDetails');
		const allProjectContent = document.querySelectorAll('.projectContent');

		let reviewContent = document.getElementById(this.dataset.contentid);

		if (reviewContent.style.visibility == 'hidden'){
			reviewContent.style.visibility = 'visible';
			this.innerHTML = 'Hide Project Details';
		}
		else {
			reviewContent.style.visibility = 'hidden';
			this.innerHTML = 'Show Project Details'
		}
	});
}
const inner = document.getElementById('inner');
//hiding side:
button.addEventListener('click', function(){
	document.getElementById('navigation').style.display = "none";
	showButton.style.display = "block";
	document.getElementById('inner').style.marginLeft = "-14rem";
	document.getElementById('footer').style.paddingLeft="1rem";
	// navigation.transition= "none 5s";



});
//showing side:
showButton.addEventListener('click', function(){

	// document.getElementById('container').style.marginLeft = "5rem";
	document.getElementById('navigation').style.display = "block";
	// document.getElementById('hide-side-button').style.display = "inline";
	document.getElementById('show-button').style.display = "none";
	document.getElementById('inner').style.marginLeft = "0rem";
	document.getElementById('footer').style.paddingLeft="15rem";



});


//project carousel
var slide_index = 1;  
displaySlides(slide_index);  
function nextSlide(n) {  
	displaySlides(slide_index += n);  
}  
function currentSlide(n) {  
	displaySlides(slide_index = n);  
}  
leftButton.addEventListener('click', function(){
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
	slides[slide_index].style.display = "block";  
}

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