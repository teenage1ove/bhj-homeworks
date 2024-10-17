const reveal = document.querySelectorAll('.reveal')

document.addEventListener('scroll', () => {
	reveal.forEach(reveal => {
		if (reveal.getClientRects()[0].top < window.innerHeight) {
			reveal.classList.add('reveal_active')
		}
	})

	// if (reveal.getClientRects()[0].top > window.innerHeight) {
	//     reveal.classList.remove('reveal_active');
	// }
})
