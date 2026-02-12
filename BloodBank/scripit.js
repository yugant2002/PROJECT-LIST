// scripit.js — simple starter script
console.log('scripit.js loaded — script started');

if (typeof document !== 'undefined') {
	// If running in a browser, wait for DOM and then show a small message
	document.addEventListener('DOMContentLoaded', () => {
		console.log('DOM ready — script running');
		const notice = document.createElement('p');
		notice.textContent = 'JavaScript is running (scripit.js)';
		notice.style.fontFamily = 'Arial, sans-serif';
		notice.style.color = '#333';
		document.body.appendChild(notice);
	});
} else {
	console.log('No DOM available (running outside browser)');
}
