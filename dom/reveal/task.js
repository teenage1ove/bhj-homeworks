const reveal = document.querySelector('.reveal')

document.addEventListener('scroll', () => {
	if (reveal.getClientRects()[0].top < window.innerHeight) {
		reveal.classList.add('reveal_active')
	}

	// if (reveal.getClientRects()[0].top > window.innerHeight) {
	//     reveal.classList.remove('reveal_active');
	// }
})
