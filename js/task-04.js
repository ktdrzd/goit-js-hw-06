const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValueSpan = document.getElementById('value');

let counterValue = 0;

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

function updateCounterValue() {
  counterValueSpan.textContent = counterValue;
}

function decrement() {
    counterValue -= 1;
    updateCounterValue();
}

function increment() {
    counterValue += 1;
    updateCounterValue();
}
