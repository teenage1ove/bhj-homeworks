const holes = document.querySelectorAll('.hole')
const deadHtml = document.querySelector('#dead')
const lostHtml = document.querySelector('#lost')

for (let i = 0; i < holes.length; i++) {
	holes[i].addEventListener('click', function () {
		if (holes[i].classList.contains('hole_has-mole')) {
			deadHtml.innerHTML++
			holes[i].classList.remove('hole_has-mole')
		} else {
			lostHtml.innerHTML++
		}

		if (+lostHtml.innerHTML >= 5) {
			alert('Вы проиграли')
			lostHtml.textContent = 0
			deadHtml.textContent = 0
			return
		}

		if (+deadHtml.innerHTML >= 10) {
			alert('Вы выиграли')
			deadHtml.textContent = 0
			lostHtml.textContent = 0
			return
		}
	})
}
