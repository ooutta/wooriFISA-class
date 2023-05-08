function display(numberStatus, convertNumber) {
    setColor(numberStatus, convertNumber);
    numberStatus.textContent = convertNumber;
}

function setColor(numberStatus, convertNumber) {
    if(convertNumber < 0) {
        numberStatus.style.color = 'red';
    } else if(convertNumber === 0) {
        numberStatus.style.color = 'black';
    } else if(convertNumber > 0) {
        numberStatus.style.color = 'green';
    }
}

function decrease() {
    const numberStatus = document.getElementById('number-status');
    const stringToIntNumberDecrease = numberStatus.textContent -1; // Number 안해줘도 string to int 된다.
    // const stringToIntNumberDecrease = Number(numberStatus.textContent) -1;
    display(numberStatus, stringToIntNumberDecrease);
}

function reset() {
    const numberStatus = document.getElementById('number-status');
    display(numberStatus, 0);
}

function increase() {
    const numberStatus = document.getElementById('number-status');
    const stringToIntNumberIncrease = Number(numberStatus.textContent) +1;
    display(numberStatus, stringToIntNumberIncrease);
}

function random() {
    const numberStatus = document.getElementById('number-status');
    const randomNumber = parseInt(Math.random() * 100);
    display(numberStatus, randomNumber);
}

function pow() {
    const numberStatus = document.getElementById('number-status');
    const stringToIntNumberIncrease = Math.pow(Number(numberStatus.textContent), 2);
    display(numberStatus, stringToIntNumberIncrease);
}

const decreaseBtn = document.getElementById('btn-decrease');
const resetBtn = document.getElementById('btn-reset');
const increaseBtn = document.getElementById('btn-increase');
const randomBtn = document.getElementById('btn-random');
const powBtn = document.getElementById('btn-pow');

decreaseBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);
increaseBtn.addEventListener("click", increase);
randomBtn.addEventListener("click", random);
powBtn.addEventListener("click", pow);