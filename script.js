document.querySelectorAll('.number').forEach(button => button.addEventListener('click', (e) => updateDisplay(e.target.textContent)));
document.querySelectorAll('.operator').forEach(button => button.addEventListener('click', (e) => handleOperator(e.target.textContent)));
document.querySelector('.equals').addEventListener('click', handleEquals);
document.querySelector('.clear').addEventListener('click', clearDisplay);

document.getElementById('clear').addEventListener('click', handleClearDisplay);
document.getElementById('backspace').addEventListener('click', handleBackspace);
document.addEventListener('keydown', handleKeydown);

document.querySelectorAll('button[data-number]').forEach(button => {
    button.addEventListener('click', () => {
        const number = button.innerText;
        handleNumberClick(number);
    });
});
document.querySelectorAll('button[data-operator]').forEach(button => {
    button.addEventListener('click', (e) => handleOperator(e.target.textContent))
});
const display = document.querySelector('.display');
const operationDisplay = display.querySelector('.operation');
const resultDisplay = display.querySelector('.result');
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    document.querySelector('main').classList.toggle('dark');
    document.querySelector('h1').classList.toggle('dark');
    
    document.querySelectorAll('button').forEach(button => {
        button.classList.toggle('dark');
    });

    document.querySelector('section[aria-label="calculator display"]').classList.toggle('dark');
});




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
        return `Nice try, put your thinking cap on and don't break my calculator next time!`;
        
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

function handleClearDisplay() {
    displayValue = '';
    firstNumber = null;
    secondNumber = null;
    operator = null;
    result = null;
    display.textContent = '0';
}

function updateDisplay() {
    document.getElementById('display').innerText = displayValue || '0';
}

function handleNumberClick(number) {
    if (number === '.' && displayValue.includes('.')) {
        return;
    }
    displayValue += number;
    updateDisplay();
}

function handleOperator(selectedOperator) {
    operator = selectedOperator;
    
    if (firstNumber === null) {
        firstNumber = parseFloat(displayValue);
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
        firstNumber = displayValue;
        secondNumber = null;
        operator = null;
        displayValue = '';
    }
}

function handleBackspace() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function handleKeydown(e) {
    const key = e.key;

    switch (key) {
        case '+':
        case '-':
        case '*':
        case '/':
            handleOperator(key);
            break
        case 'Enter':
        case '=':
            handleEquals();
            break;
        case 'Escape':
            handleClearDisplay();
            break;
        default:
            if (/^[0-9.]$/.test(key)) {
                handleNumberClick(key);
                break;
            }
            break;
    }
}

function updateDisplay(operation = '', result = '') {
    if (result === '') {
        resultDisplay.textContent = '0';
        resultDisplay.classList.add('faded');
    } else {
        resultDisplay.textContent = result;
        resultDisplay.classList.remove('faded');
    }
    operationDisplay.textContent = operation;
}

function clearDisplay() {
    updateDisplay('', '0');
}