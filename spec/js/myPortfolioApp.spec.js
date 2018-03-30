describe('canary', function() {
	it('should run a test', function() {
		expect(true).toBe(true)
	})
})


describe('hide navigation menu', ()=> {
	it ('hides nav menu when hide button clicked and was visible', () =>{
<<<<<<< HEAD
		const navMenu = document.createElement('nav')
		navMenu.classList.add('navMenu')
		const parent = document.createElement('aside')

		parent.appendChild(navMenu);
		navMenu.style.visibility =='visible';

		expect(document.querySelector('.navMenu')).toBe('hidden');
=======
		
		// navMenu.classList.add('navMenu')
		const ul = document.createElement('ul');
		const parent = document.createElement('#navigation')
		

		parent.appendChild(ul);
		parent.style.visibility =='visible';

const numOfChildrenBefore = parent.childNodes.length; 
const numberOfChildrenAfter - cards.childNodes.length;

// 		expect(numOfChildrenAfter).toEqual(numOfChildrenBefore-1)

		expect(document.querySelector('ul')).toBeNull();
>>>>>>> carouselRedesign
	})
});


describe ('show navigation menu', function(){
	it ('shows nav menu when button clicked and was hidden', function(){

		const navMenu = document.createElement('nav');
		navMenu.classList.add('navMenu');
		const parent = document.createElement('aside');

		parent.appendChild(navMenu);

		navMenu.style.visibility == 'hidden';

<<<<<<< HEAD
		expect(document.querySelector('.navMenu')).toBe('visible');
=======
		expect(document.querySelector('.ul')).toBe('visible');
>>>>>>> carouselRedesign
	})
});


describe('shows project details', function(){
	it ('shows details when button is pressed if details are hidden', function(){
		const projDetails = document.createElement('projectContent');
		projDetails.classList.add('projDetails');
		const parent = document.createElement('content');

		parent.appendChild(projDetails);

		projDetails.style.visibility == 'hidden';

		expect(document.querySelector('projDetails')).toBe('visible');
	})
})

describe('hides project details', function(){
	it ('hides details when button is pressed if details are visible', function(){
		const projDetails = document.createElement('projectContent');
		projDetails.classList.add('projDetails');
		const parent = document.createElement('content');

		parent.appendChild(projDetails);

		projDetails.style.visibility == 'visible';

		expect(document.querySelector('projDetails')).toBe('hidden');
	})
<<<<<<< HEAD
})
=======
})
>>>>>>> carouselRedesign
