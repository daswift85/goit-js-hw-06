let counterValue = 0;

const incrementCount = document.querySelector('#increment-count');
const decrementCount = document.querySelector('#decrement-count');
const totalValue = document.querySelector('#value');

const handleIncrement = () => {
  counterValue++;
  totalValue.textContent = counterValue;
};
incrementCount.addEventListener('click', handleIncrement);

const handleDecrement = () => {
  counterValue--;
  totalValue.textContent = counterValue;
};
decrementCount.addEventListener('click', handleDecrement);
