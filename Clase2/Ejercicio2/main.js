document.addEventListener('DOMContentLoaded', function () {
    const operand1 = document.getElementById('operand1');
    const operand2 = document.getElementById('operand2');
    const result = document.getElementById('result');

    const addButton = document.getElementById('add');
    const subtractButton = document.getElementById('subtract');
    const multiplyButton = document.getElementById('multiply');
    const divideButton = document.getElementById('divide');

    function validarEuler(valor) {
        return valor.toLowerCase() === 'e' ? Math.E : parseFloat(valor);
    }

    addButton.addEventListener('click', () => {
        const num1 = validarEuler(operand1.value);
        const num2 = validarEuler(operand2.value);

        if (isNaN(num1) || isNaN(num2)) {
            result.innerText = 'Error: Ambos operandos deben ser números válidos o "la constante de euler".';
        } else {
            result.innerText = num1 + num2;
        }
    });

    subtractButton.addEventListener('click', () => {
        const num1 = validarEuler(operand1.value);
        const num2 = validarEuler(operand2.value);

        if (isNaN(num1) || isNaN(num2)) {
            result.innerText = 'Error: Ambos operandos deben ser números válidos o "e".';
        } else {
            result.innerText = num1 - num2;
        }
    });

    multiplyButton.addEventListener('click', () => {
        const num1 = validarEuler(operand1.value);
        const num2 = validarEuler(operand2.value);

        if (isNaN(num1) || isNaN(num2)) {
            result.innerText = 'Error: Ambos operandos deben ser números válidos o "e".';
        } else {
            result.innerText = num1 * num2;
        }
    });

    divideButton.addEventListener('click', () => {
        const num1 = validarEuler(operand1.value);
        const num2 = validarEuler(operand2.value);

        if (isNaN(num1) || isNaN(num2)) {
            result.innerText = 'Error: Ambos operandos deben ser números válidos o "e".';
        } else if (num2 === 0 || num2 < 0) {
            result.innerText = 'Error: No es posible dividir por 0 o un número negativo.';
        } else {
            result.innerText = num1 / num2;
        }
    });
});
