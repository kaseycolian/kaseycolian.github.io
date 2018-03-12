const asideNav = document.querySelector('nav');
navMenu = document.querySelector('nav ul');
const nav = document.querySelector('nav');
const aside = document.querySelector('aside');
const projectInfo = document.querySelector('content h3');

button = document.createElement('button');
button.innerHTML = 'Hide Side';	
asideNav.appendChild(button);

const projectName = document.querySelector('.project h3');


const leftButton = document.querySelector('.left');
const rightButton =document.querySelector('.right');
const projectButton = document.querySelector('.btn');

//button to show/hide project details
const projectContent = document.querySelector('#projectContent');
const allProjectContent = document.querySelectorAll("#projectContent");
const projectInfoButtons = document.querySelectorAll('.projectDetails');
const projectInfoButton = document.querySelector('.projectDetails');
projectInfoButtons.forEach(function(projectInfoButton){
	projectInfoButton.addEventListener('click', function(){
		// document.getElementById('projectContent');
		if (projectContent.style.visibility == 'hidden'){
			document.getElementById('projectContent').style.visibility = 'visible';
			projectInfoButton.innerHTML = 'Hide Project Details';
		}
		else {
			document.getElementById('projectContent').style.visibility = 'hidden';
			projectInfoButton.innerHTML = 'Show Project Details'
		}
	})
});
//button to show/hide navigation
button.addEventListener('click', function(){
	document.getElementById('navigation');
	if (navigation.style.visibility == 'visible'){
		document.getElementById('navigation').style.visibility = 'hidden';
		button.innerHTML = 'Show Navigation';
	}
	else {
		document.getElementById('navigation').style.visibility = 'visible';
		button.innerHTML = 'Hide Navigation';
	}
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
