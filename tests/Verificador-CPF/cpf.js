const cpfInput = document.getElementById('icpf');

cpfInput.addEventListener('input', function() {
    let cpf = cpfInput.value;
    cpf = cpf.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o primeiro ponto
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o segundo ponto
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona o hífen

    cpfInput.value = cpf;
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    var cpf = document.getElementById('icpf').value;
    var resultado = verificarCPF(cpf);
    var resDiv = document.getElementById('res');

    if (resultado) {
        window.alert("CPF válido")
        resDiv.innerHTML = "<p>CPF válido</p>";
    } else {
        resDiv.innerHTML = "<p>CPF inválido</p>";
    }

    setTimeout(function() {
        resDiv.innerHTML = ""; // Limpa o resultado após um atraso de 3 segundos
    }, 3000);

    document.getElementById('myForm').reset(); // Reseta os inputs do formulário
});

function verificarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g,''); // Remove caracteres não numéricos
    
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return false;
    }
    
    var soma = 0;
    var resto;
    
    for (var i = 1; i <= 9; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    
    resto = (soma * 10) % 11;
    
    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }
    
    if (resto !== parseInt(cpf.substring(9, 10))) {
        return false;
    }
    
    soma = 0;
    
    for (var i = 1; i <= 10; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    
    resto = (soma * 10) % 11;
    
    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }
    
    if (resto !== parseInt(cpf.substring(10, 11))) {
        return false;
    }
    
    return true;
}