const clicker__counter = document.querySelector('#clicker__counter')
let flag = true
document.querySelector('#cookie').onclick = function () {
	clicker__counter.textContent = +clicker__counter.textContent + 1
	if (flag) {
		document.querySelector('#cookie').classList.add('new')
		flag = false
	} else {
		document.querySelector('#cookie').classList.remove('new')
		flag = true
	}
}
