// Animated loading dots
setInterval(() => document.querySelectorAll('.loading-dots').forEach(el => el.textContent.length < 3 ? el.textContent += '.' : el.textContent = ''), 500);

/*
Dark mode
 */

const darkButton = document.querySelector('.dark');

const toggleDark = () => {
	// Toggle UIkit properties
	['uk-light', 'uk-background-secondary'].forEach(Class => [document.body, document.querySelector('.uk-modal-body')].forEach(el => el.classList.toggle(Class)));
	// Toggle dark button text
	darkButton.textContent = darkButton.textContent === 'Dark' ? 'Light' : 'Dark';
};

darkButton.onclick = () => {
	// Save white/dark state
	localStorage.setItem('dark', localStorage.getItem('dark') === 'true' ? 'false' : 'true');
	// Toggle
	toggleDark();
};

// Restore saved dark style
if(localStorage.getItem('dark') === 'true') toggleDark();
