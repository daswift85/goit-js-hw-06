const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');
const body = document.querySelector('body');

function getRandomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
}

btn.addEventListener('click', e => {
  const color = getRandomHexColor();
  span.textContent = color;
  body.style.backgroundColor = color;
});


// const button = document.querySelector(".change-color");
// const colorSpan = document.querySelector(".color");
// // const body = document.querySelector("body");
// //button.addEventListener("click", getRandomHexColor);

// button.addEventListener("click", function () {
//   const randomColor = getRandomHexColor();
//   console.log(randomColor);
//   document.body.style.background = randomColor;
//   colorSpan.innerText = randomColor;
// });

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }