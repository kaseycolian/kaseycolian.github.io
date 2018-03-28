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
const leftButton = document.querySelector('.left');
const rightButton =document.querySelector('.right');
const projectButton = document.querySelector('.btn');

//button to show/hide project details
// const projectContent = document.querySelector('#projectContent');

const inner = document.getElementById('inner');
const footer = document.getElementById('footer');

//hiding side:
button.addEventListener('click', function(){
	navigation.style.display = "none";
	showButton.style.display = "block";
	inner.style.marginLeft = "-14rem";
	footer.style.paddingLeft="1rem";
	// navigation.transition= "none 5s";

});

//showing side:
showButton.addEventListener('click', function(){

	navigation.style.display = "block";
	document.getElementById('show-button').style.display = "none";
	inner.style.marginLeft = "0rem";
	footer.style.paddingLeft = "15rem";

});
showButton.addEventListener('mouseenter', function(){

    showButton.style.transform = "rotate(23.5deg)"; 
    showButton.style.transition = "1s";

});

showButton.addEventListener('mouseout', function(){
	showButton.style.transform = "rotate(0deg)";
	showButton.style.transition = "1s";
});

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

const projectInfoButton = document.querySelector('.projectDetails');
const projectInfoButtons = document.querySelectorAll('projectDetails');

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
const listItems = document.querySelectorAll('nav ul li a');
listItems.forEach(function(listItem) {
	listItem.addEventListener('mouseenter', function() {
		this.style.fontSize = '1.5rem';
	})
	listItem.addEventListener('mouseout', function(){
		this.style.fontSize = '1.2rem';
	})
})



