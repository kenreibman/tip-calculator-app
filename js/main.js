const billInput = document.querySelector('#bill-input');
const tipButtons = document.querySelectorAll('.input__tip-option');
const tipInput = document.querySelector('#tip-input');
const peopleInput = document.querySelector('#people-input');
const peopleInputError = document.querySelector('.input__people--error');

const tipOutput = document.querySelector('#tip');
const totalOutput = document.querySelector('#total');

const calculatorReset = document.querySelector('.calculator__reset');

let billValue = 0.0;
let tipValue = 0.15;
let peopleValue = 1;

// create billinput
// Grad the bill input and make it print it's value

// Add an event listener of input with the function setBillValue

billInput.addEventListener('input', setBillValue);
tipInput.addEventListener('input', setCustomTipValue);
peopleInput.addEventListener('input', setPeopleValue);
calculatorReset.addEventListener('click', reset);

// creat setbillvalue function
function setBillValue() {
  billValue = parseFloat(billInput.value);
  calculateTip();
  console.log(billValue);
}

const activateClickedButton = (button) => {
  tipButtons.forEach((b) => b.classList.remove('input__tip-option--active'));
  button.classList.add('input__tip-option--active');
  tipValue = parseFloat(button.innerHTML) / 100;
  tipInput.value = ''; // clear custom tip field
  console.log(tipValue);
};

tipButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activateClickedButton(button);
    calculateTip();
  });
});

tipButtons[2].click();

function setCustomTipValue() {
  tipValue = parseFloat(tipInput.value / 100);

  tipButtons.forEach((b) => b.classList.remove('input__tip-option--active'));

  if (tipInput != '') {
    calculateTip();
  }

  console.log(tipValue);
}

function setPeopleValue() {
  peopleValue = parseFloat(peopleInput.value);

  if (peopleValue <= 0) {
    peopleInputError.classList.add('input__people--error-show');
    setTimeout(function () {
      peopleInputError.classList.remove('input__people--error-show');
    }, 3000);
  }

  calculateTip();
}

function calculateTip() {
  if (peopleValue >= 1) {
    let tipAmount = (billValue * tipValue) / peopleValue;
    let totalAmount = (billValue * (tipValue + 1)) / peopleValue;

    tipOutput.innerHTML = '$' + parseFloat(tipAmount).toFixed(2);
    totalOutput.innerHTML = '$' + parseFloat(totalAmount).toFixed(2);
  }
}

function reset() {
  billInput.value = '0';
  setBillValue();
  tipButtons[2].click();
  peopleInput.value = '1';
  setPeopleValue();
}

// select reset button element
// add a reset button event listener that listens for a click and has a function reset()

// create a reset function
// bill.value = '0.0'
// run setBillValue() function

// click tipButtons[2].click() --> clicks the 15% by default

// set people.value to 1
// run setpeopelvalue() function
