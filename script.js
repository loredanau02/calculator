document.querySelectorAll('.number').forEach(button => button.addEventListener('click', (e) => updateDisplay(e.target.textContent)));
document.querySelectorAll('.operator').forEach(button => button.addEventListener('click', (e) => handleOperator(e.target.textContent)));
document.querySelector('.equals').addEventListener('click', handleEquals);
document.querySelector('.clear').addEventListener('click', clearDisplay);


const display = document.querySelector('.display');
let displayValue = '';
let firstNumber = null;
let secondNumber = null;
let operator = null;
let result = null;
let shouldResetDisplay = false;

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null;
    }
}

function clearDisplay() {
    displayValue = '';
    firstNumber = null;
    secondNumber = null;
    operator = null;
    result = null;
    display.textContent = '0';
}