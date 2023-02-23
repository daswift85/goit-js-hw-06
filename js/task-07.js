const inputData = document.querySelector('#font-size-control');
const outputFont = document.querySelector('#text');

inputData.addEventListener('input', event => {
  const size = inputData.value;
  outputFont.style.fontSize = size + 'px';
});
