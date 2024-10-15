const buttons = document.querySelectorAll('.font-size')
const bookContent = document.querySelector('.book')
buttons.forEach(button => {
	button.addEventListener('click', event => {
		event.preventDefault()

		if (!button.classList.contains('font-size_active')) {
			buttons.forEach(button => button.classList.remove('font-size_active'))
			button.classList.add('font-size_active')
		}

		const fontSize = button.getAttribute('data-size')
		if (fontSize === 'small') {
			bookContent.classList.remove('font-size_big')
			bookContent.classList.add('font-size_small')
		} else if (fontSize === 'big') {
			bookContent.classList.remove('font-size_small')
			bookContent.classList.add('font-size_big')
		} else {
			bookContent.classList.remove('font-size_small', 'font-size_big')
		}
	})
})
