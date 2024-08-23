document.querySelectorAll('button[data-number]').forEach(button => {
    button.addEventListener('click', () => {
        const number = button.innerText;
        handleNumberClick(number);
    });
});
document.querySelectorAll('button[data-operator]').forEach(button => {
    button.addEventListener('click', (e) => handleOperator(e.target.textContent))
});
document.getElementById('equals').addEventListener('click', handleEquals);
document.getElementById('clear').addEventListener('click', clearDisplay);


const display = document.getElementById('display');
let displayValue = '';
let firstNumber = null;
let secondNumber = null;
let operator = null;
let result = null;
let shouldResetDisplay = false;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        // TODO: let's leave this here for now and see what we wanna do about it
        return console.log('Numbers cannot be divided by zero');
        
    }
}

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

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function handleNumberClick(number) {
    displayValue += number;
    updateDisplay();
}

function handleOperator(selectedOperator) {
    if (firstNumber === null) {
        firstNumber = parseFloat(displayValue);
        operator = selectedOperator;
        displayValue = '';
    } else if (operator && displayValue !== '') {
        secondNumber = parseFloat(displayValue);
        displayValue = operate(operator, firstNumber, secondNumber);
        updateDisplay();
        firstNumber = parseFloat(displayValue);
        displayValue = '';
        operator = selectedOperator;
    }
}

function handleEquals() {
    if (operator && displayValue !== '') {
        secondNumber = parseFloat(displayValue);
        displayValue = operate(operator, firstNumber, secondNumber);
        updateDisplay();
        firstNumber = null;
        operator = null;
    }
}
