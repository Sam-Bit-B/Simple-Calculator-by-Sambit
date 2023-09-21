let display = document.getElementById('display');
let currentInput = '';

function addToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function calculate() {
    try {
        const result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
    currentInput = '';
}

function backspace() {
    currentInput = currentInput.slice(0, -1); // Remove the last character
    display.value = currentInput;
}