const dropdown = document.querySelector('.dropdown__list')
const dropdownValue = document.querySelector('.dropdown__value')

const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'))

dropdownValue.addEventListener('click', () => {
	dropdown.classList.toggle('dropdown__list_active')
})

dropdownItems.forEach(dropdownItem => {
	dropdownItem.addEventListener('click', event => {
		event.preventDefault()

		dropdownValue.textContent = dropdownItem.textContent
		dropdown.classList.remove('dropdown__list_active')
	})
})
