const inputField = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const mainBox = document.querySelector('#boxes');


btnCreate.addEventListener('click', () => createBoxes(inputField.value));
btnDestroy.addEventListener('click', destroyBoxes)

function createBoxes(amount) {
  let size = 30;
  for (let index = 0; index < amount; index++) {
    const newBoxItem = document.createElement('div');
newBoxItem.style.width = `${size}px`;
newBoxItem.style.height = `${size}px`;
newBoxItem.style.backgroundColor = getRandomHexColor();
mainBox.appendChild(newBoxItem);
size += 10
  }
}

function destroyBoxes() {
  mainBox.innerHTML = '';
  }

function getRandomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
}
