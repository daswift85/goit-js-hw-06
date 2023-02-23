const categoriesNumber = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesNumber.length);

categoriesNumber.forEach(li => {
  console.log('Category:', li.firstElementChild.textContent);
  console.log('Elements:', li.lastElementChild.children.length);
});
