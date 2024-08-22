# Website Link 
The project can be viewed by clicking here: https://loredanau02.github.io/calculator/

# Calculator
This project is a simple calculator application that allows users to perform arithmetic operations and handle multiple operations one at a time. It features a user-friendly interface, keyboard support, error handling, and the ability to hold decimal numbers. Users can enter numbers and operations in sequence, with the calculator evaluating each pair of numbers and updating the display with the intermediate result.

# Features
* Basic Operations: Addition, subtraction, multiplication, and division are supported.
* Chained Operations: The calculator evaluates two numbers simultaneously, and subsequent operations use the previous result.
* Decimal Support: Users can input floating-point numbers by adding decimals to numbers.
* Clear Function: A "clear" button allows users to reset the calculator and start fresh.
* Backspace Function: Users can remove the last digit entered using a "backspace" button.
* Keyboard Support: Keyboard shortcuts allow users to enter numbers and operators and trigger actions.
* Error Handling: Division by zero triggers a snarky error message, and other edge cases are handled gracefully.
* Responsive Design: The calculator is designed to work on different screen sizes and devices.

# Files 
- 'index.html' file contains the structure and layout of the calculator's user interface. It includes all the buttons, the display area, and any additional elements like the backspace or clear button.
- 'style.css' file contains the styles for the calculator. It defines how the calculator looks, including the layout, colors, fonts, button sizes, and responsive behavior.
- 'script.js' is the main JavaScript file that powers the functionality of the calculator. It handles all the interactions and calculations. Key functionalities such as handling button clicks, performing arithmetic operations, managing chained operations, handling decimal points, and error handling (like dividing by zero) are implemented in this file.

# How to use
Once the calculator is open in your browser, you can use the following features:
1. Click the number buttons or use the keyboard to input numbers. Choose an operator (+, -, *, /) to perform arithmetic.
Chained Calculations: After entering a pair of numbers and an operator, the result is calculated and used as the starting point for the next operation.
2. Press the decimal button (.) to add a decimal point to your number. Only one decimal is allowed per number.
3. If you make a mistake, press the backspace button to remove the last digit.
4. Press the clear button (C) to reset the calculator's initial state.
5. Use the keyboard to perform calculations:
* 0-9 to input numbers.
* +, -, *, / for operators.
* = or Enter to calculate.
* Backspace to delete the last digit.
* C or Escape to clear the calculator.

# Error Handling 
Dividing by zero will show you the message 'Nice try, put your thinking cap on and don't break my calculator next time!' instead of showing you an error message.
Also, the calculator will prevent multiple decimal points in a single number.
