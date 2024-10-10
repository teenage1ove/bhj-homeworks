const timerHtml = document.getElementById('timer').innerHTML
let timerCount = +timerHtml

const timerId = setInterval(countDown, 1000)
function countDown() {
	document.getElementById('timer').innerHTML = timerCount
	if (timerCount <= 0) {
		clearInterval(countDown)
		alert('Вы победили в конкурсе')
		return clearInterval(timerId)
	}

	return timerCount--
}
