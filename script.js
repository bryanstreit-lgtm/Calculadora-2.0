const display = document.getElementById('display');

function appendValue(value) {
    if (display.value === 'Erro') {
        clearDisplay();
    }
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        if (display.value.trim() === '') return;
        
        // Substitui caracteres visuais por operadores reais se necessário
        let expression = display.value;
        
        // Avalia a expressão com segurança básica
        let result = Function(`return (${expression})`)();
        
        // Trata divisões por zero ou resultados inválidos
        if (!isFinite(result)) {
            display.value = 'Erro';
        } else {
            // Limita casas decimais longas
            display.value = Number(result.toFixed(8)).toString();
        }
    } catch (error) {
        display.value = 'Erro';
    }
}
