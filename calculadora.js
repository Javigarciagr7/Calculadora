//JAVIER GARCÍA
// https://github.com/Javigarciagr7/Calculadora.git

function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function addSquareRoot() {
    const currentValue = document.getElementById('display').value;
    try {
        const result = Math.sqrt(eval(currentValue));
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function addLogarithm() {
    const currentValue = document.getElementById('display').value;
    try {
        const result = Math.log10(eval(currentValue));
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}