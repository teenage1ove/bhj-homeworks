const rotator = document.querySelector('.rotator')
const rotatorCases = rotator.querySelectorAll('.rotator__case')
let index = 0

setInterval(() => {
	index += 1

	if (index === rotatorCases.length) {
		rotatorCases[index - 1].classList.remove('rotator__case_active')
		index = 0
		rotatorCases[index].classList.add('rotator__case_active')
	} else {
		rotatorCases[index].classList.add('rotator__case_active')
		rotatorCases[index - 1].classList.remove('rotator__case_active')
	}
}, 1000)
