const inputData = document.querySelector('#validation-input');
const length = inputData.getAttribute('data-length');

inputData.addEventListener('blur', event => {
	if (event.target.value.trim().length == length) {
		inputData.classList.add('valid')
		if (inputData.classList.contains('invalid')) {
			inputData.classList.remove('invalid')
		}
	} else {
		if (inputData.classList.contains('valid')) {
			inputData.classList.remove('valid')
		}
		inputData.classList.add('invalid')
	}
})
