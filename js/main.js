// Prompt inicial
const startCalculator = () => {
    const start = prompt('¿Deseas iniciar la calculadora? (sí/no)').toLowerCase();
    if (start === 'si') {
        document.getElementById('calculator').classList.remove('hidden');
        setupCalculator();
    } else {
        alert('Saliste de la calculadora');
    }
};

// Configuración de la calculadora
const setupCalculator = () => {
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = '';
    let firstOperand = '';

    const buttons = document.querySelectorAll('#buttons .btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                operator = '';
                firstOperand = '';
                display.textContent = '0';
            } else if (value === '=') {
                if (firstOperand && operator && currentInput) {
                    const result = calculate(firstOperand, operator, currentInput);
                    display.textContent = result;
                    console.log('Resultado:', result);
                    alert('Resultado: ' + result);
                    currentInput = result;
                    firstOperand = '';
                    operator = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput) {
                    firstOperand = currentInput;
                    operator = value;
                    currentInput = '';
                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });

    const calculate = (a, op, b) => {
        a = parseFloat(a);
        b = parseFloat(b);
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return a / b;
            default: return 0;
        }
    };
};

// Ejecutar la función de inicio
startCalculator();
