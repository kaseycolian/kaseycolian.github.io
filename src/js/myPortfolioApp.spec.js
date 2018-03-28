describe('canary', function() {
	it('should run a test', function() {
		expect(true).toBe(true)
	})
})


describe('hide navigation menu', ()=> {
	it ('hides nav menu when hide button clicked and was visible', () =>{
		const navMenu = document.createElement('nav')
		navMenu.classList.add('navMenu')
		const parent = document.createElement('aside')

		parent.appendChild(navMenu);
		navMenu.style.visibility =='visible';

		expect(document.querySelector('.navMenu')).toBe('hidden');
	})
});


describe ('show navigation menu', function(){
	it ('shows nav menu when button clicked and was hidden', function(){

		const navMenu = document.createElement('nav');
		navMenu.classList.add('navMenu');
		const parent = document.createElement('aside');

		parent.appendChild(navMenu);

		navMenu.style.visibility == 'hidden';

		expect(document.querySelector('.navMenu')).toBe('visible');
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
})