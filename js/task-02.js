const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const newList = [];

ingredients.forEach(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.className = 'item';
  newList.push(item);
});

list.append(...newList);
