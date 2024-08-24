document.getElementById('equals').addEventListener('click', handleEquals);
document.getElementById('clear').addEventListener('click', clearDisplay);
document.getElementById('backspace').addEventListener('click', handleBackspace);
document.addEventListener('keydown', handleKeydown);

document.querySelectorAll('button[data-number]').forEach(button => {
    button.addEventListener('click', () => {
        const number = button.innerText;
        handleNumberClick(number);
    });
});

document.querySelectorAll('button[data-operator]').forEach(button => {
    button.addEventListener('click', (e) => handleOperator(e.target.textContent));
});

const display = document.getElementById('display');
const operationDisplay = display.querySelector('.operation');
const resultDisplay = display.querySelector('.result');
let displayValue = '';
let firstNumber = null;
let secondNumber = null;
let operator = null;
let shouldResetDisplay = false;
let hasError = false;

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
    if (b == 0) {
        alert('Nice try, do not break my calculator next time!');
        hasError = true;
        return 'Error';
    }
    return a / b;
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

function handleNumberClick(number) {
    if (hasError) {
        clearDisplay();
        hasError = false;
    }

    if (shouldResetDisplay) {
        displayValue = '';
        shouldResetDisplay = false;
    }

    if (number === '.' && displayValue.includes('.')) {
        return;
    }
    displayValue += number;
    updateResultDisplay(displayValue);
}

function handleOperator(selectedOperator) {
    if (hasError) return;

    if (firstNumber === null) {
        firstNumber = parseFloat(displayValue);
    } else if (operator && displayValue !== '') {
        secondNumber = parseFloat(displayValue);
        const result = operate(operator, firstNumber, secondNumber);

        if (result === 'Error') {
            updateResultDisplay(result);
            return;
        }

        updateResultDisplay(result);
        firstNumber = result;
    }

    operator = selectedOperator;
    shouldResetDisplay = true;
    updateOperationDisplay(`${firstNumber} ${operator}`);
}

function handleEquals() {
    if (operator && displayValue !== '') {
        secondNumber = parseFloat(displayValue);
        const result = operate(operator, firstNumber, secondNumber);

        if (result === 'Error') {
            updateResultDisplay(result);
            return;
        }

        updateResultDisplay(result);
        updateOperationDisplay(`${firstNumber} ${operator} ${secondNumber} =`);
        firstNumber = result;
        operator = null;
        shouldResetDisplay = true;
    }
}

function handleBackspace() {
    if (hasError) return;

    displayValue = displayValue.slice(0, -1);
    updateResultDisplay(displayValue || '0');
}

function handleKeydown(e) {
    if (hasError) return;

    const key = e.key;

    if (/^[0-9.]$/.test(key)) {
        handleNumberClick(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        handleOperator(key);
    } else if (key === 'Enter' || key === '=') {
        handleEquals();
    } else if (key === 'Backspace') {
        handleBackspace();
    } else if (key === 'Escape') {
        clearDisplay();
    }
}

function updateOperationDisplay(operation) {
    operationDisplay.textContent = operation;
}

function updateResultDisplay(result) {
    resultDisplay.textContent = result;
    if (result === '0' || result === 'Error') {
        resultDisplay.classList.add('faded');
    } else {
        resultDisplay.classList.remove('faded');
    }
}

function clearDisplay() {
    displayValue = '';
    firstNumber = null;
    secondNumber = null;
    operator = null;
    shouldResetDisplay = false;
    hasError = false;
    updateOperationDisplay('');
    updateResultDisplay('0');
}

clearDisplay();