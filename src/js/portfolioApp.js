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

//button to show/hide project details
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
});


//project carousel

const projectInfoButton = document.querySelector('.projectDetails');
// const projectName = document.querySelector('.project h3');
// const projectButton = document.querySelector('.btn');
const projectInfoButtons = document.querySelectorAll('.projectDetails');
const leftButton = document.getElementById('left');
const rightButton =document.getElementById('right');
// const projectImages = document.getElementsByClassName('projectImage');

// const reviewContents = document.querySelectorAll('projectContent');
// for (let con = 0; con<reviewContents.length; con++){
// 	leftButton.addEventListener('click', function(){

// 		let reviewContent = document.getElementById(this.dataset.contentid);
// 		// if (reviewContents[3].style.visibility=='visible'){
// 		// 	reviewContents[1].style.visibility = 'visible';
// 		// }

// 		if (reviewContents[con-1].style.visibility == 'visible'){
// 			reviewContent.style.visibility = 'visible';
// 		}
// 		else{
// 			reviewContent.style.visibility='hidden';
// 		}
// 	});
// }


for (var i = 0; i<projectInfoButtons.length; i++){
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
			projectImage.style.transform='scale(.9)';
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
			reviewContent.style.paddingLeft = "1rem";
			reviewContent.style.paddingRight = "1rem";
			projectImage.style.transform='scale(1)';
			this.style.transform = "scale(1)";
			this.style.transitionDuration= '1s';
			this.style.marginBottom = '3rem';
			this.innerHTML = 'Show Project Details';
			// this.style.marginBottom = '2rem';
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
	slides[slide_index].style.display = "flex";  
	slides[slide_index].style.flexDirection = "column";
	slides[slide_index].style.alignItems = "center";
}
