<<<<<<< HEAD
const asideNav = document.querySelector('nav');
navMenu = document.querySelector('nav ul');
const nav = document.querySelector('nav');
const aside = document.querySelector('aside');
const projectInfo = document.querySelector('content h3');

button = document.createElement('button');
button.innerHTML = 'Hide Side';	
asideNav.appendChild(button);

const projectName = document.querySelector('.project h3');


=======
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



const projectName = document.querySelector('.project h3');
>>>>>>> carouselRedesign
const leftButton = document.querySelector('.left');
const rightButton =document.querySelector('.right');
const projectButton = document.querySelector('.btn');

//button to show/hide project details
<<<<<<< HEAD
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
=======
// const projectContent = document.querySelector('#projectContent');

const inner = document.getElementById('inner');
const footer = document.getElementById('footer');

//hiding side:
button.addEventListener('click', function(){
	navigation.style.display = "none";
	showButton.style.display = "block";
	inner.style.marginLeft = "-14rem";
	header.style.marginLeft = "-14rem";
	footer.style.paddingLeft="1rem";
	showButton.style.transform = "rotateX(28.5deg) rotateY(8deg) rotateZ(15deg) scale(1)";
	showButton.style.right = "1rem";
});

//showing side:
showButton.addEventListener('click', function(){
	navigation.style.display = "block";
	inner.style.marginLeft = "0rem";
	footer.style.paddingLeft = "15rem";
	document.getElementById('show-button').style.display = "none";
	showButton.style.transition="2s";
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
>>>>>>> carouselRedesign
});


//project carousel
<<<<<<< HEAD
=======

const projectInfoButton = document.querySelector('.projectDetails');
const projectInfoButtons = document.querySelectorAll('.projectDetails');

for (var i = 0; i<projectInfoButtons.length; i++){
	projectInfoButtons[i].addEventListener('click', function(){

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

>>>>>>> carouselRedesign
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

<<<<<<< HEAD
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
=======



>>>>>>> carouselRedesign
